# Scratch

Just a sample run of a small test case:

![intro](docs/out.gif)

## Testing Strategy

In overall testing process covered by both development and qa teams. QA team starts when the requirements to the specific functionality are finilized. First of all the QA engineers create the Test Cases which describes the steps to verify specific functionality. As the development on a specific functionality takes place we can start creating automated test - it may start before the functionality is implemented and merged to the master branch, however the final automated test code should be finalized (or simply verified to be working) only when the functionality is finally developed. 

Ideally none of the functionality should be deployed untill fully tested and the automated test execution should be performed on some integration-level environment (dev/qa or some launched during CI process) and its results should allow merging and deploying the functionality further.

After the functionality gets deployed the full regression cycle should be executed.

PS: the full testing strategy consist of both testing "pieces" done by both devs and qas, however I described only the part applicable to QAs.

## Questions

1. Where would you focus your testing efforts?

I believe the most of the testing efforts, considering that development team is also participating in creating unit and components tests, should be spent on creating black-box functional tests for our application - e.g. api and ui parts. Also some non-functional things like ui/api response time, mobile emulation, custom browsers and so on may be tested by us. However that more depends on specific non-functional requirements that we may have for our application.


2. How would you categorize test cases for the application? (e.g. major functionalities and components you to test)

Well, I would use something simillar to the following list of functionalities & components to categorize tests:

    - code
        - using single command
        - using commands chain
        - categories menu
        - zoom
        - context menu
            - undo
            - redo
            - cleanup
            - duplicate block
            - delete block

    - costumes
        - using surprise costume
        - uploading from file
        - drawing a costume
        - searching

    - sounds
        - using surprise sound
        - uploading from file
        - making a recording
        - searching
        
    - loading from file

    - saving to file

    - settings
        - langugage
        - color mode

    - switching between small/large/full-screen stages

    - using Scratch account

3. Which of the test cases are critical and should be part of the repeated regression tests?

Ultimately all of the described functionalities (considering it is fully automated) would become repeated regression suite.

However, in case when something is not automated it should be separately reconsidered to become or not to become the regression part.

4. Bugs classification

I believe standard bugs classification could be applied here - e.g. separating bugs by its severity (critical, major, minor, none), priority (critical, major, minor, none) and components to which it relates (code, costumes, sound, import/export, custom blocks, etc). Also we might want to separate some specific bugs that are affecting/visible only at some level - like ui, api or even non-functional (like slow redraw or response time).


## Sample Test Cases

1. Scratch Code in overall should allow us to create scratch with multiple actions

    | Step | Expected Result |
    | --- | --- |
    | Navigate to the scratch editor | |
    | Add move 10 steps step to the scatch | The step appears in workspace |
    | Add turn 90 degrees left step to the scatch | The step appears in workspace |
    | Add move 20 steps step to the scatch | The step appears in workspace |
    | Add turn 270 degrees right step to the scatch | The step appears in workspace |
    | Add when flag is clicked event to the scatch | The step appears in workspace |
    | Click the green flag | The actor to move in regards with defined steps |

2. Scratch Code with motions should be able to move or turn the actor

    2.1 Scratch Code with motions should be able to move the actor on some steps

    | Step | Expected Result |
    | --- | --- |
    | Navigate to the scratch editor | |
    | Go to Motions area | |
    | Click on move 10 steps step | The actor moves right 10 steps |
    | Click on 10 in the move step and type -10 | The step becomes "move -10 stes" |
    | Click on "move -10 steps" step | The actor should move 10 steps left |

    2.2 Scratch Code with motions should be able to turn the actor clockwise

    | Step | Expected Result |
    | --- | --- |
    | Navigate to the scratch editor | |
    | Go to Motions area | |
    | Click on turn 15 degrees clockwise step | The actor turns clockwise 15 degrees |
    | Click on 15 in the turn step and type 45 | The step becomes "turn 45 degrees" |
    | Click on "turn 45 degrees" clockwise step | The actor turns clockwise 45 degrees |
    | Click on 45 in the turn step and type 90 | The step becomes "turn 90 degrees" |
    | Click on "turn 90 degrees" clockwise step | The actor turns clockwise 90 degrees |
    | Click on 90 in the turn step and type 180 | The step becomes "turn 180 degrees" |
    | Click on "turn 180 degrees" clockwise step | The actor turns clockwise 180 degrees |
    | Click on 180 in the turn step and type 270 | The step becomes "turn 270 degrees" |
    | Click on "turn 270 degrees" clockwise step | The actor turns clockwise 270 degrees |

    2.3 Scratch Code with motions should be able to turn the actor counter-clockwise

    | Step | Expected Result |
    | --- | --- |
    | Navigate to the scratch editor | |
    | Go to Motions area | |
    | Click on turn 15 degrees counter-clockwise step | The actor turns counter-clockwise 15 degrees |
    | Click on 15 in the turn step and type 45 | The step becomes "turn 45 degrees" |
    | Click on "turn 45 degrees" counter-clockwise step | The actor turns counter-clockwise 45 degrees |
    | Click on 45 in the turn step and type 90 | The step becomes "turn 90 degrees" |
    | Click on "turn 90 degrees" counter-clockwise step | The actor turns counter-clockwise 90 degrees |
    | Click on 90 in the turn step and type 180 | The step becomes "turn 180 degrees" |
    | Click on "turn 180 degrees" counter-clockwise step | The actor turns counter-clockwise 180 degrees |
    | Click on 180 in the turn step and type 270 | The step becomes "turn 270 degrees" |
    | Click on "turn 270 degrees" counter-clockwise step | The actor turns counter-clockwise 270 degrees |

3. Scratch Code with custom blocks should allow user to use custom blocks

    | Step | Expected Result |
    | --- | --- |
    | Navigate to the scratch editor | |
    | Go to My Blocks area | There is a button "Make a Block" |
    | Define my-block step with default paramteres | Block "my-block" appears on the commands list |
    | Add when flag is clicked event | |
    | Add my-block step to the scatch | |
    | Click the green flag | The actor to stay on the initial place |
