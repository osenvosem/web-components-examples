# Web Components examples

## How to start

Clone the repository and run `npm start`. The application will be available on `localhost:8080`.

## Components

### `<popup-info>`

![Screenshot 2020-12-27 at 15 31 33](https://user-images.githubusercontent.com/6762673/103170854-a192b380-4858-11eb-96f1-f527c87a879b.jpg)

Adaptive popup component that receives text and image attributes (the default image is shown if no value is passed). By default the popup is shown above the text unless there is not room for the popup, it is shown below in such case.

```html
<popup-info text="" img=""></popup-info>
```

### `<ul is="expanding-list">`

![Screenshot 2020-12-27 at 22 01 10](https://user-images.githubusercontent.com/6762673/103177835-09fc8780-488f-11eb-94e6-7687c6df5a94.jpg)

It is a customized build-in element that allows for building nested lists.

```html
<ul is="expanding-list">
  <li>Juice</li>
  <li>Milk</li>
  <li>Hot chocolate</li>
  <li>
    Tea
    <ul>
      <li>Grey tea</li>
      <li>Black tea</li>
      <li>
        Green tea
        <ul>
          <li>Sencha</li>
          <li>Gyokuro</li>
          <li>Kabusecha</li>
        </ul>
      </li>
    </li>
  </ul>
</ul>
```
