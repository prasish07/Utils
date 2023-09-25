# Utils Tools with HTMX, Node.js(Express), and EJS

## Overview

This project utilizes Node.js as its backend platform and Express.js as the web framework to serve HTML and EJS templates. TypeScript is used for server-side scripting. The project leverages HTMX on the client side for dynamic functionality. Key components and files are organized as follows:

- **`public`**: Contains the `index.html` file, which serves as the main client-side entry point, and `script.js`, responsible for handling client-side functionality.

- **`src`**: This directory holds essential files, including controllers, routes, helpers, middleware, and views.

## Getting Started

To start using this application, follow these steps:

1. Clone the repository:

   ```sh
   git clone https://github.com/prasish07/Utils.git
   
   cd project-name

   npm install

   npm start

The server will be accessible at http://localhost:3000.

## Project Info

This project leverages EJS to create dynamic templates that can be rendered by the Node.js server at various endpoints. Additionally, it makes use of HTMX functionality in the `index.html` file to perform AJAX requests to different endpoints, dynamically generating templates in the main file.

### EJS Templating

EJS (Embedded JavaScript) is a powerful templating language used in this project to dynamically generate flexible HTML templates on the server-side. These templates are rendered by the Node.js server at different endpoints, enabling data-driven content generation and dynamic user experiences.

In this project, we have utilized eleven different EJS templates for various purposes:

1. **header.ejs**: Generated when a GET request is sent to the `/header` endpoint. This template returns an HTMX element.

2. **inputHeader.ejs**: Generated when a GET request is sent to the `/inputHeader` endpoint. This template returns an HTMX element along with associated JavaScript code.

3. **inputEditor.ejs**: Generated when a POST request is sent to the `/uploadFile` endpoint, triggered when a user uploads a file. This endpoint reads the contents of the file and sends an HTML editor, along with the file's content, to the receiver.

4. **menu.ejs**: Generated when a GET request is sent to the `/menu` endpoint. This endpoint is triggered by `header.ejs` to dynamically generate a dropdown menu when clicking on the JSON to YAML converter.

5. **contentWrapper.ejs**: Generated when a GET request is sent to the `/contentWrapper` endpoint. This endpoint provides dynamically generated content to the receiver.

6. **otherToolsWrapper.ejs**: Generated when a GET request is sent to the `/otherTools` endpoint. This template provides the outer shell for the Other Tools component.

7. **otherTools.ejs**: Generated when a GET request is sent to the `/otherToolsEjs` endpoint. This template dynamically generates the list of utility tools.

8. **outputHeader.ejs**: Generated when a GET request is sent to the `/outputHeader` endpoint. This template provides the output header element.

9. **outputEditor.ejs**: Generated when a POST request is sent to the `/runCode` endpoint. This template provides an editor with the converted code in YAML format when the convert button is clicked.

10. **footer.ejs**: Generated when a GET request is sent to the `/footer.ejs` endpoint. This template provides the HTML elements for the footer.

11. **toggleButton.ejs**: Generated when a GET request is sent to the `/toggleButton.ejs` endpoint. This template provides the HTML elements to toggle between input editor and output editor in mobile view.

These EJS templates play a crucial role in creating dynamic and interactive web pages, allowing for the seamless generation of content and user interface elements based on various user interactions and data inputs.

### HTMX for AJAX Requests

HTMX is employed in the `index.html` file to enhance the client-side experience. It enables asynchronous communication with the server by making AJAX requests to various endpoints. This approach allows for seamless updates and modifications to the displayed content without requiring a full page reload.

#### Example Usage

```html
<!-- Using HTMX to make an AJAX request -->
<div hx-get="/header" hx-trigger="load">
        Loading...
</div>

<!-- In this html, when the page is loaded this div send a get request to locolhost:3000/header to get the header html templete and after getting that, it replace this div with the component get from the request.-->
```

# Limitations of HTMX in this Project

While working on this project and utilizing HTMX for client-side functionality, I encountered several limitations and challenges that are worth noting:

1. **Partial Reliance on JavaScript for Certain Features:** HTMX provides powerful capabilities for dynamic updates without full-page reloads. However, some features, like copying code to the clipboard, still require client-side JavaScript functionality. This means that while HTMX can enhance the user experience, it doesn't fully replace the need for certain client-side scripting.

2. **Complexity of Server-Side File Downloads:** When implementing file downloads, it's often more practical to handle them on the client side. While it's possible to serve files from the server, doing so can introduce complexity into the codebase. Therefore, for features like downloading code or files, client-side functionality is often preferred for simplicity.

3. **Challenges with Running Code:** Running code dynamically can be a complex task. One limitation we encountered was obtaining the code from the editor for the specific button that triggered the AJAX call. Additionally, when sending code to the backend and receiving the updated code, there were challenges in seamlessly updating the editor. This process can be time-consuming and may involve replacing the entire editor with a new one, which can lead to issues, especially when dealing with complex scenarios.

4. **Uploading Code to the Editor:** Similar to running code, uploading code to the editor can be challenging. Managing the transfer of code from the client to the editor on the server and ensuring a smooth and responsive user experience can be a complex task.

5. **Adding Hotkeys:** When adding hotkeys to the project, we encountered a unique challenge. HTMX provides a convenient way to trigger actions with the `hx-trigger` attribute, such as `[keydown]`. However, this attribute is primarily effective when an element is in focus, making it unsuitable for global hotkeys that should work regardless of the element's focus state. To address this, we had to implement hotkey functionality using client-side JavaScript to capture keyboard events globally, enabling us to trigger actions like running code with specific key combinations (e.g., Ctrl + Enter).

These limitations highlight scenarios where HTMX, while providing significant benefits in terms of interactive and dynamic web applications, may not fully replace the need for certain client-side functionalities or may introduce complexity in handling specific tasks.
