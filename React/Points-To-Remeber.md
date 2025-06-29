### Error Handling
1. Ensure changes between old and new version of react
2. If image / componant not visible ..check {}.generally {} is used for multiple componant import, for single import directly import `img from ../assets/images/img.png`
3. Ensure you arent using src = "{}", no ""
4. Check for multiple elem import you have used func = ({}) =>
 ```jsx
const PopularProductsCard = ({imgURL, name, price}) => {}
not
const PopularProductsCard = (imgURL, name, price) => {}
//dont forget {}
 ```  
5. Check position attributes absolute, relative, they have a huge impact
