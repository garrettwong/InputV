# InputV
Extending the HTML input form tag - easing the process of input validation and making it configurable

[inputV](https://github.com/garrettwong/InputV) — Input Validation
==================================================

Contribution Guides
--------------------------------------

In the spirit of open source software development, inputV always encourages community code contribution.


### Rebasing ###

For feature/topic branches, you should always use the `--rebase` flag to `git pull`, or if you are usually handling many temporary "to be in a github pull request" branches, run the following to automate this:

[Jasmine](http://jasmine.github.io/) Reference
-----------------

### Test methods ###


Usage
------------------------------

```html
<input type="text" class="inputV-component" value="initial value" />
<button>Get Value</button>
```

```js

$(document).ready(function () {
    var $inputVComponent = $('.inputV-component').inputV({
        elem: 'input',
        browseEnabled: true,
        css: {
            width: '50%'
        },
        pattern: /test/,
        initialValue: 'test'
    });

    console.log($inputVComponent);

    $('button').click(function () {
        alert($inputVComponent.val());
    });
});
```

API Options object to pass into inputV
------------------------------

- initialValue: used to validate if value changed from the original
- pattern: a regex or string pattern to validate against
- browseEnabled: true | false - a magnifying glass is displayed on the right of the input element
- elem: 'input' | 'select' - two options for now
- validate: a validation funciton
- css: a jQuery css object