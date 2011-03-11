# CheckboxGroup #

Creates a dependency between one checkbox (master) to one or more other checkboxes (slaves). When
a master is checked - all its slaves are checked as well.

## How to use ##

### Syntax ###

    new CheckboxGroup(master, slaves)

### Arguments ###

1. master - (string) A string of the id for an Element, (element) Element reference - the master checkbox
2. slaves - (string) A CSS selector, (elements), (collection) or (array) An enumerable list of elements - slaves checkboxes

### Events ###

- masterClick - (function) callback to execute when the master checkbox is checked / unchecked.
- slaveClick - (function) callback to execute when a slave checkbox is checked / unchecked.