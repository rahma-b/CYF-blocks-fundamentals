/* paste the JavaScript code from the 'Generated Code' section of the CYF Blocks editor here */

var img_links;


img_links = ['https://images.pexels.com/photos/931177/pexels-photo-931177.jpeg?auto=compress&cs=tinysrgb&w=600', 'https://images.pexels.com/photos/250591/pexels-photo-250591.jpeg?auto=compress&cs=tinysrgb&w=600', 'https://images.pexels.com/photos/459335/pexels-photo-459335.jpeg?auto=compress&cs=tinysrgb&w=600', 'https://images.pexels.com/photos/931162/pexels-photo-931162.jpeg?auto=compress&cs=tinysrgb&w=600', 'https://images.pexels.com/photos/2058498/pexels-photo-2058498.jpeg?auto=compress&cs=tinysrgb&w=600'];


document.getElementById('next-id').addEventListener('click', (event) => {
  let element_image = document.getElementById('image');
  img_links.push(img_links[0]);
  element_image.setAttribute("src", img_links.shift());

});

document.getElementById('previous-id').addEventListener('click', (event) => {
  let element_image2 = document.getElementById('image');
  img_links.unshift(img_links.slice(-1)[0]);
  element_image2.setAttribute("src", img_links.pop());

});
