# vsc-nanoid-snippets

Add nanoids to your snippets. By automatically adding an id it makes it far easier to track down the source of annoying logs or origin of an error later on. Common use cases might include:

* `new Error('$1 __NANOID__')` - Create an error with a nanoid
* `console.log($1,'__NANOID__')` - Create a log with a nanoid
* `__NANOID__` - Insert a nanoid at cursor

## In action

<img src="images/example.gif" width="600"/>

## Configuration

Nanoid will be inserted on the fly when the string `__NANOID__` appears in your snippet. There are 10 snippet slots. You must bind them to a keyboard shortcut to use them.

settings.json
```json
{
    "nanoid-snippets.snip0": "__NANOID__",
    "nanoid-snippets.snip1": "console.log($1,'__NANOID__')",
    "nanoid-snippets.snip2": "new Error('$1 __NANOID__')",
    "...": "...",
    "nanoid-snippets.snip9": "...",
}
```

keybindings.json
```json
{
    "key": "cmd+i",
    "command": "nanoid-snippets.insert-snip0"
  },
  {
    "...":"...."
  },
  {
    "key": "...",
    "command": "nanoid-snippets.insert-snip9"
  },
```

