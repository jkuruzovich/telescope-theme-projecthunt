/**
 * Created by jkuruzovich on 4/25/15.
 */
var thumbnailProperty = {
  propertyName: 'thumbnailUrl',
  propertySchema: {
    type: String,
    optional: true,
    label: 'Image Url'
  }
}

var url =  {
  propertyName: 'url',
  propertySchema: {
    type: String,
    label: "Image Url",
    optional: true,
    autoform: {
      editable: true,
      type: "bootstrap-url",
      omit: true
    }
  }
}

var body = {
  propertyName: 'body',
  propertySchema: {
    type: String,
    label: "Project Description",
    optional: false,
    autoform: {
      editable: true,
      rows: 10
    }
  }
}





addToPostSchema.push(url);
addToPostSchema.push(body);
addToPostSchema.push(thumbnailProperty);

