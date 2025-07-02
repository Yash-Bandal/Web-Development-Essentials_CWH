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
6. Dont use "" inside **src**
   ```jsx
   <img src={imgURL} alt={name}
   not
   <img src="{imgURL}" alt="{name}"
   or
   <img src="imgURL" alt="name" 
   ```
7. Remember the syntax `{attribute && <element>}`
   - Its used when you want a feature defined in the main component to be used by another componant sharing it or not

   eg: components/Button.jsx
   ```jsx
   const Button = ({label,iconURL}) => {
     return (
       <button className="flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none bg-coral-red rounded-full text-white border-coral-red">
           {label}
   
         {iconURL && <img src={iconURL} alt="arrow-right-icon" 
         className="ml-2 rounded-full w-5 h-5"/>}
       </button>
     )
   }
   
   export default Button
   ```
<div align="center">
<table>
  <tr>
    <td align="center">
      <img src="https://github.com/Yash-Bandal/Web-Development-Essentials_CWH/blob/7268adc07bfe81ca7e01c33616185e98c777b5d1/NodeJS/StoreRoom/btn1.PNG?raw=true" width="200" height="120"/>
      <br>
      <b>Button 1 Having imgURL </b>
    </td>
    <td align="center">
      <img src="https://github.com/Yash-Bandal/Web-Development-Essentials_CWH/blob/7268adc07bfe81ca7e01c33616185e98c777b5d1/NodeJS/StoreRoom/btn2.PNG?raw=true" width="200" height="120"/>
      <br>
       <b>Button 2 not Having imgURL </b>
    </td>
  </tr>
</table>
</div>


  ```jsx
  //First Button with imgURL
  <Button label="Shop Now" iconURL={arrowRight} />
  
  //Second Button without imgURL
  <Button label="View Details" />
  ``` 
**Explanation:** If element has `imgURL then only share image with it, else not

8. Be careful while returning a functional compoannt
   ```
   return (<>
      ✅
   </>)
   ```
      ```
   return
    (<>
      ❌ Not work, because it return ` ` space
   </>)
   ```
9. While using cards from a website, ensure copying their tailwind config also, because they may have custom css defined
10. Install
    ```bash
    npm install react-router-dom
    ```
    You forget this and get error, you think syntax correct and waste time in it
11. Dont use `a href` , it will cause your page to reload, for SPAs we use `Link to ` <br>
    - Link is not a new tag, on Runtime its converted to anchor tag 
    ❌ Don’t use:
    ```jsx
    <a href="/about">About</a>
    ```

    ✅ Use instead:
    ```jsx
    import { Link } from 'react-router-dom';

    <Link to="/about">About</Link>
    ```
12. If `text-center` `center` not able to use, ensure `w-full` in parent
13. Intreview jargon questions -> Context-api -> to acoid props drilling
