function useCodeBlock() {

}

describe('Scratch Code', () => {
    beforeEach(() => {
        cy.visit('/projects/editor/?tutorial=getStarted');

        cy.get('#logo_img').should('exist').and('be.visible');

        // TODO Remove when there is more apropriate way to define that actor is drawed on the canvas
        cy.wait(1000);
    })

    afterEach(() => {
        // TODO Remove as this is silly wait to simply view the action with an own eyes xD
        cy.wait(1000);
    })

    context(' in overall', () => {
        it(' should allow us to create scratch with multiple actions', () => {
            const degreesLeft = 90;
            const degreesRight = 270;
            const stepsMove1 = 20;
            
            // Add move 10 steps step
            cy.get('[data-id=motion_movesteps]')
                .drag('g.blocklyWorkspace', {target: {position: 'center'}});

            // Add Turn 90 degrees left step
            cy.get('[data-id=motion_turnleft] g.blocklyEditableText > text')
                .should('exist')
                .click();

            cy.get('input.blocklyHtmlInput')
                .should('exist')
                .type(degreesLeft+'{ENTER}');

            cy.get('[data-id=motion_turnleft]')
                .drag('g.blocklyWorkspace g.blocklyBlockCanvas', {target: {position: 'bottom', force: true}});
            

            // Add move 20 steps step
            cy.get('[data-id=motion_movesteps] g.blocklyEditableText > text')
                .should('exist')
                .click();

            cy.get('input.blocklyHtmlInput')
                .should('exist')
                .type(stepsMove1+'{ENTER}');

            cy.get('[data-id=motion_movesteps]')
                .drag('g.blocklyWorkspace g.blocklyBlockCanvas', {target: {position: 'bottom', force: true}});


            // Add Turn 270 degrees right step
            cy.get('[data-id=motion_turnright] g.blocklyEditableText > text')
                .should('exist')
                .click();

            cy.get('input.blocklyHtmlInput')
                .should('exist')
                .type(degreesRight+'{ENTER}');

            cy.get('[data-id=motion_turnright]')
                .drag('g.blocklyWorkspace g.blocklyBlockCanvas', {target: {position: 'bottom', force: true}});


            // Add when flag is clicked event
            cy.get('div.scratchCategoryId-events')
                .click();

            cy.get('[data-id=event_whenflagclicked')
                .should('exist')
                .and('be.visible')
                .drag('g.blocklyWorkspace g.blocklyBlockCanvas', {target: {position: 'top', force: true}});


            // This is to release the drag action 
            cy.get('div.scratchCategoryId-motion')
                .click();

            cy.get('[data-id=motion_movesteps] g.blocklyEditableText > text')
                .should('exist')
                .click();

            // Run the action
            cy.get('img[class^=green-flag_green-flag]')
                .click({force: true});
        });
    });

    context(' with motions', () => {
        [-20, -10, 10, 20].forEach(_ => {
            it(` should be able to move the actor on ${_} steps`, () => {
                const val = _;

                cy
                    .get('[data-id=motion_movesteps] g.blocklyEditableText > text')
                    .should('exist')
                    .click();

                cy.get('input.blocklyHtmlInput')
                    .should('exist')
                    .type(val+'{ENTER}');

                cy
                    .get('[data-id=motion_movesteps] g.blocklyEditableText > text')
                    .should('have.text', `${val}`);
                
                cy
                    .get('[data-id=motion_movesteps] > text:first')
                    .should('exist')
                    .click();

                // TODO Add check when there is a way to check that canvas item has changed
            })
        });

        [45, 90, 180, 270].forEach(val => {
            it(` should be able to turn the actor left on ${val} degrees`, () => {
                cy
                    .get('[data-id=motion_turnleft] g.blocklyEditableText > text')
                    .should('exist')
                    .click();

                cy.get('input.blocklyHtmlInput')
                    .should('exist')
                    .type(val+'{ENTER}');

                cy
                    .get('[data-id=motion_turnleft] g.blocklyEditableText > text')
                    .should('have.text', `${val}`);
                
                cy
                    .get('[data-id=motion_turnleft] > text:first')
                    .should('exist')
                    .click();

                // TODO Add check when there is a way to check that canvas item has changed
            })
        });

        [45, 90, 180, 270].forEach(val => {
            it(` should be able to turn the actor right on ${val} degrees`, () => {
                cy
                    .get('[data-id=motion_turnright] g.blocklyEditableText > text')
                    .should('exist')
                    .click();

                cy.get('input.blocklyHtmlInput')
                    .should('exist')
                    .type(val+'{ENTER}');

                cy
                    .get('[data-id=motion_turnright] g.blocklyEditableText > text')
                    .should('have.text', `${val}`);
                
                cy
                    .get('[data-id=motion_turnleft] > text:first')
                    .should('exist')
                    .click();

                // TODO Add check when there is a way to check that canvas item has changed
            })
        })

    })

    context(' with custom blocks', () => {
        it(' should allow user to use custom blocks', () => {
            // Define custom my-block block
            cy.get('div.scratchCategoryId-myBlocks')
                .click();

            cy.get('g.blocklyBlockCanvas > g.blocklyFlyoutButton:last > text')
                .should('be.visible')
                .and('have.text', 'Make a Block');

            cy.get('g.blocklyBlockCanvas > g.blocklyFlyoutButton:last')
                .click();

            cy.get('input.blocklyHtmlInput')
                .should('exist')
                .type('my-block');

            cy.get('button[class^=custom-procedures_ok-button]')
                .click();

            cy.get('g[data-id=procedures_call]')
                .should('exist')
                .and('be.visible');

            // Add when flag is clicked event
            cy.get('div.scratchCategoryId-events')
                .click();

            cy.get('[data-id=event_whenflagclicked')
                .should('exist')
                .and('be.visible')
                .drag('g.blocklyWorkspace g.blocklyBlockCanvas', {target: {position: 'center', force: true}});

            // Add my-block step
            cy.get('div.scratchCategoryId-myBlocks')
                .click();

            cy.get('[data-id=procedures_call]')
                .drag('g.blocklyWorkspace g.blocklyBlockCanvas', {target: {position: 'bottom', force: true}});


            // This is to release the drag action 
            cy.get('div.scratchCategoryId-motion')
                .click();

            cy.get('[data-id=motion_movesteps] g.blocklyEditableText > text')
                .should('exist')
                .click();

            // Run the action
            cy.get('img[class^=green-flag_green-flag]')
                .click({force: true});
        })
    })
})