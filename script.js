// section_1
// adding number of jobs dynamically
  
let interview_data=[];
let reject_data=[];
let current_status='all'
  
let Blank_inter_sec=document.getElementById('Blank_inter_sec');


let total_display= document.getElementById('total_display');
let aj=total_display.innerText;

let inter_display=document.getElementById('inter_display');




filter_sec=document.getElementById('filterd_sec');

let avalilable_job= document.getElementById('avalilable_job');

    let cardsElement=document.getElementById('all_sec');
    let num_card=cardsElement.children.length;
  total_display.innerText=num_card;
  avalilable_job.innerHTML=`<p class="font-semibold text-lg text-[#64748B]" id="avalilable_job">${num_card} Jobs</p>`;




   //sec_2
   //toogle button

 
   function toggle(btn_id){
    current_status=btn_id;
    // btn_clr

    all_btn.classList.remove('bg-[#3B82F6]','text-white');
  all_btn.classList.add('bg-white', 'text-black');
    
        interview_btn.classList.remove('bg-[#3B82F6]','text-white');
         interview_btn.classList.add('bg-white', 'text-black');

          reject_btn.classList.remove('bg-[#3B82F6]','text-white');
             reject_btn.classList.add('bg-white', 'text-black');

document.getElementById(btn_id).classList.add('bg-[#3B82F6]','text-white');
document.getElementById(btn_id).classList.remove('bg-white', 'text-black');  

if(btn_id == 'interview_btn'){
cardsElement.classList.add('hidden');
filter_sec.classList.remove('hidden');
     fetch_data_interview(); 

     

}

else if(btn_id=='all_btn'){
  cardsElement.classList.remove('hidden');
filter_sec.classList.add('hidden');
}

else if(btn_id=='reject_btn'){
cardsElement.classList.add('hidden');
filter_sec.classList.remove('hidden');
fetch_data_reject();      
   }
   


  }


const maincontainer=document.querySelector('main');




maincontainer.addEventListener('click',function(event){




  // interview_btn
  if(event.target.classList.contains('interview_btn')){


    const jobdata=event.target.parentNode.parentNode;

const jobname=jobdata.querySelector('.jobName').innerText;
const typeofJob=jobdata.querySelector('.typeOfJob').innerText;
const timming=jobdata.querySelector('.timming').innerText;
const timming_1=jobdata.querySelector('.timming_1').innerText;
const timming_2=jobdata.querySelector('.timming_2').innerText;
const salary=jobdata.querySelector('.salary').innerText;
const status=jobdata.querySelector('.status').innerText;
const des=jobdata.querySelector('.des').innerText;
jobdata.querySelector('.status').innerText="Interview"

const cardInfo={
  jobname,
  typeofJob,
  timming,
  status:'Interview',
  timming_1,
  timming_2,
  salary,
  des



}

const is_in=interview_data.find(item=> item.jobname==cardInfo.jobname);



if(!is_in){
  interview_data.push(cardInfo);
}

if(jobdata.parentNode === cardsElement){
      cardsElement.removeChild(jobdata);
  }

reject_data=reject_data.filter(item=>item.jobname!=cardInfo.jobname);
reject_display.innerText = reject_data.length;
if(current_status=='reject_btn'){
  fetch_data_reject();
}


inter_display.innerText = interview_data.length;



  }




// reject_btn
    else if(event.target.classList.contains('reject_btn')){


    const jobdata=event.target.parentNode.parentNode;

const jobname=jobdata.querySelector('.jobName').innerText;
const typeofJob=jobdata.querySelector('.typeOfJob').innerText;
const timming=jobdata.querySelector('.timming').innerText;
const timming_1=jobdata.querySelector('.timming_1').innerText;
const timming_2=jobdata.querySelector('.timming_2').innerText;
const salary=jobdata.querySelector('.salary').innerText;
const status=jobdata.querySelector('.status').innerText;
const des=jobdata.querySelector('.des').innerText;
jobdata.querySelector('.status').innerText="Rejected"

const cardInfo={
  jobname,
  typeofJob,
  timming,
  status:'Rejected',
  timming_1,
  timming_2,
  salary,
  des



}

const is_in=reject_data.find(item=> item.jobname==cardInfo.jobname);



if(!is_in){
  reject_data.push(cardInfo);
}

if(jobdata.parentNode === cardsElement){
      cardsElement.removeChild(jobdata);
  }

interview_data=interview_data.filter(item=>item.jobname!=cardInfo.jobname);
inter_display.innerText = interview_data.length;

if(current_status=='interview_btn'){
  fetch_data_interview();
}



reject_display.innerText = reject_data.length;

 }



})


