import axios from "axios";

const AuthService = {
    login: async(username,password) => {
        const url = "https://api.escuelajs.co/api/v1/auth/login";
        const response = await axios.post(url,{
            email:username,
            password
        }) 

        if(response.data.access_token){
            localStorage.setItem("userToken",JSON.stringify(response.data))
           
        }

        return response.data;
    },
    logout: ()=>{
        localStorage.removeItem("userToken");
        
    },
    create: async (newUserEmail, newPassword, newUsername ) => {
        const url ="https://api.escuelajs.co/api/v1/users/"

        const response = await axios.post(url,{
            email:newUserEmail,
            password:newPassword,
            name:newUsername,
            avatar:"https://w7.pngwing.com/pngs/749/84/png-transparent-chef-cooking-chef-hat-white-hand-cook-thumbnail.png"
        })

        return response.data
    }
}

export default AuthService;