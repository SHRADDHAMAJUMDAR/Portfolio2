import restro from "../assets/restro.jpg"
import rateapp from "../assets/rateapp.jfif"
import exp from "../assets/exp.jpg"



const ProjectCardData=[
    {
        imgsrc:restro,
        title:"Restaurant App",
        text:"This Django application creates a restaurant management system with functionalities for user authentication, menu management, and cuisine categories. It caters to three user roles: admin, staff, and customer.",
        view:"https://github.com/SHRADDHAMAJUMDAR/restroapp"
        
    },
    {
        
                imgsrc:rateapp,
                title:"Rating Website",
                text:"Web app to display ratings of different products aggregated from various sites - built using php and postgresql,HTML,CSS,javascript and bootstrap",
                view:"https://github.com/SHRADDHAMAJUMDAR/ratingpg"

    },

    {
        
        imgsrc:exp,
        title:"Expense Tracker",
        text:"An expense tracker app with django rest framework where authdrf and finance app contains files that act as the api from which exptracker acts as the consumeapi and uses their data. In this we have login,singnup and logout options and the people can add,edit and delete categories and their corresponding activities and the expenses alloted to them.The dashboard contains graphs and pi charts showing the monthly expenses and their proportions.",
        view:"https://github.com/SHRADDHAMAJUMDAR/expense_tracker"

},

];

export default  ProjectCardData;