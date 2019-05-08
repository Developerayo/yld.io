## Usage
Each logo passed to the `LogoGrid` component is expected to come from Contentful in one of two shapes.

Either an `ImageLink` content type:
```
  imageLink {
    name,
    url,
    image {
      title,
      file {
        url
      },
      fluid
    }
  }
```
or just an `Image` content type:
```
  image {
    title,
    file {
      url
    },
    fluid
  }
```