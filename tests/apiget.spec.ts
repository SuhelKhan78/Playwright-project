import {request, test} from '@playwright/test';
test("API tsting Get Practise", async({request})=>{
    const resp1 = await request.get("https://restful-booker.herokuapp.com/booking");
    console.log(await resp1.json());

});