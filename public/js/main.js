
const submitbtn = document.getElementById("submitbtn");
const cityname = document.getElementById("cityname");
const city_name = document.getElementById("city_name");
const temp_status = document.getElementById("temp_status");
const temp_real_val = document.getElementById("temp_real_val");
const day = document.getElementById("day");
const datahide = document.querySelector('.middle_layer');
const d = new Date();
const n = d.toDateString();
day.innerText = n;



const getinfo = async(event)=>{
    event.preventDefault();
    let cityval = cityname.value;
    if(cityval === "")
    {
        city_name.innerText="Please Enter Your City Name Before Search";
        datahide.classList.add('data_hide');
    }
    else
    {
        try
         {
            let url=`http://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=c6fc91b922cea248d23b3c5627e58562`
            const res = await fetch(url);
            const data = await res.json();
            const arrdata = [data];
            city_name.innerText = `${arrdata[0].name}, ${arrdata[0].sys.country}`;
            temp_real_val.innerText = arrdata[0].main.temp;
            const temp_mood = arrdata[0].weather[0].main;
            

            if(temp_mood === "Clear")
            {
                temp_status.innerHTML="<i class='fas fa-sun' style='color:rgb(235, 232, 52)'></i>";
            }
            else if(temp_mood === "Rain")
            {
                temp_status.innerHTML="<i class='fas fa-cloud-rain' style='color:rgb(47, 147, 187);'></i>";
            }  
            else if(temp_mood === "Clouds")
            {
                temp_status.innerHTML="<i class='fas fa-cloud' style='color:#f1f2f6'></i>";
            }
            else
            {
                temp_status.innerHTML="<i class='fas fa-cloud' style='color:#f1f2f6'></i>";
            }
            datahide.classList.remove('data_hide');
        } 
        catch
         {
            city_name.innerText="Please Enter the City Name Properly ";
            datahide.classList.add('data_hide');
        }
    }

}

submitbtn.addEventListener("click",getinfo);