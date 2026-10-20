# CS 260 Notes

I love web programming

This file represents what I have learned about web programming.

- [My startup](https://startup.cs260.click)
- [My simon](https://simon.cs260.click)
- [Markdown syntax](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)
-I learned about mermaid in markdown. It allows you to create a backend flowchart. " ```mermaid
sequenceDiagram
    actor User
    User ->> Login: Enter login information
    Login ->>Feed: See events
    Feed ->>About: See information
    Feed->>Feed: user uploads event
    Feed->>Feed: user removes event
    Feed->>Feed: updates events
    Feed -->>Login: Login
    About->>About: API to generate image
    About -->>Login: Login
``` "

## Helpful links

- [Course instruction](https://github.com/webprogramming260)
- [Canvas](https://byu.instructure.com)
- [MDN](https://developer.mozilla.org)

## HTML

9/21/26
I learned how to deploy to get hub through commands

Interesting things I have learned about HTML.
Spent 3 hours in TA office debugging and figuring out simon.html and uploading it to my website

#CSS
Tailwind basic syntax
text-{color}
bg-{color}
border-{color}
ring-{color}
text-{size}
font-{weight}

## React
10/7/2026
Routers change it so your website runs off of one page by using react. It takes you website to this https://simon.powellcs260startup.click/about from https://simon.powellcs260startup.click/about.html so that it no longer runs off an html file.
React components are Javascript functions that return jsx
Porting to react:
When you port your startup to React you will want to commit your changes as you complete each step in the process.

Install and configure Vite
Reorganize the code
Convert to React Bootstrap
Enable React
Create app component
Create view components
Create the router
Convert HTML to React components
Replace deployment script

Make sure to change all instances of class to className
Also remove default from export function

10/19/2026
Simple example of reactivity in code:
<input type="text" value={color} onChange={(e) => updateColor(e.target.value)} />
This adds a text box that you can type in to change the example color.

=>
This is called the fat arrow. It makes it simpler to write functions. In the example above it makes it so on the change of the text the color updates.

JSON (JavaScript Object Notation) is a way to store data. It can be a string, number, boolean, array, object, or null. It is most often a object.
This is an example of JSON:
{
  "class": {
    "title": "web programming",
    "description": "Amazing"
  },
  "enrollment": ["Marco", "Jana", "فَاطِمَة"],
  "start": "2025-02-01",
  "end": null
}
