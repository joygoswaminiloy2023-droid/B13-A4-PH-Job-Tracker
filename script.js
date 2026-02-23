// section_1
// adding number of jobs dynamically
  
let interview_data=[];
let reject_data=[];
let current_status='all_btn';
  
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



// interview_fetch_data

function fetch_data_interview(){

filter_sec.innerHTML='';
for(let interview of interview_data){


    console.log(interview,interview_data.length);
  let div=document.createElement('div')
  div.className='flex justify-between items-center bg-white p-5 rounded-xl shadow-xl mx-5';
  div.innerHTML=`  <div class="space-y-2 ">
        <h1 class="jobName">${interview.jobname}</h1>
        <p class="typeOfJob">${interview.typeofJob}</p>
        <div class="timming gap-2 flex">
            <p class="timming_1">${interview.timming_1} </p>
            <p class="timming_2"> ${interview.timming_2} </p>
            <p class="salary">${interview.salary}</p>
        </div>

        <div class="status px-6 my-3 bg-[#EEF4FF] rounded-sm py-2  inline-block">${interview.status}</div>
     <p class="des">${interview.des}</p>
<!-- btn -->
     <div>
<button id="sec_inter_btn" class=" interview_btn px-5 py-2 border border-[#10B981] text-[#10B981] text-lg font-semibold hover:bg-green-100 transition-all duration-300 active:scale-75">interview</button>
<button class=" reject_btn px-5 py-2 border border-[#EF4444] text-[#EF4444] text-lg font-semibold hover:bg-red-100   transition-all duration-300 active:scale-75">Rejected</button>
     </div>
    </div>
    
   <button class="max-w-15 max-h-15 rounded-full border border-gray-400 active:scale-75 relative top-[-100px]"> <i class="fa-solid fa-trash-can opacity-50"></i></button>
  
  `

  filter_sec.appendChild(div); 
}
  blank_sec();



}


// reject_fetch_data

function fetch_data_reject(){

filter_sec.innerHTML='';
for(let reject of reject_data){

  let div=document.createElement('div')
  div.className='flex justify-between items-center bg-white p-5 rounded-xl shadow-xl mx-5';
  div.innerHTML=`  <div class="space-y-2 ">
        <h1 class="jobName">${reject.jobname}</h1>
        <p class="typeOfJob">${reject.typeofJob}</p>
        <div class="timming gap-2 flex">
            <p class="timming_1">${reject.timming_1} </p>
            <p class="timming_2"> ${reject.timming_2} </p>
            <p class="salary">${reject.salary}</p>
        </div>

        <div class="status px-6 my-3 bg-[#EEF4FF] rounded-sm py-2  inline-block">${reject.status}</div>
     <p class="des">${reject.des}</p>
<!-- btn -->
     <div>
<button id="sec_inter_btn" class=" interview_btn px-5 py-2 border border-[#10B981] text-[#10B981] text-lg font-semibold hover:bg-green-100 transition-all duration-300 active:scale-75">interview</button>
<button class=" reject_btn px-5 py-2 border border-[#EF4444] text-[#EF4444] text-lg font-semibold hover:bg-red-100   transition-all duration-300 active:scale-75">Rejected</button>
     </div>
    </div>
    
   <button class="max-w-15 max-h-15 rounded-full border border-gray-400 active:scale-75 relative top-[-100px]"> <i class="fa-solid fa-trash-can opacity-50"></i></button>
  
  `

  filter_sec.appendChild(div); 
}
  blank_sec();

}



// del_function
maincontainer.addEventListener('click', function(event) {
    // Check if the clicked element is a trash icon or inside the trash button
    if (event.target.classList.contains('fa-trash-can') || event.target.closest('button')?.querySelector('.fa-trash-can')) {

 
    const card = event.target.closest('#all_sec > div, #filterd_sec > div');
    if (!card) return;
    card.remove();
  
   
    const jobname = card.querySelector('.jobName').innerText
  
    interview_data = interview_data.filter(item => item.jobname !== jobname);
    reject_data = reject_data.filter(item => item.jobname !== jobname)
   

    inter_display.innerText = interview_data.length;
    reject_display.innerText = reject_data.length;
     
    total_display.innerText = cardsElement.children.length;

      blank_sec();
   
    
    }
 updateJobCounts();

   
});

function blank_sec() {

    if(current_status === 'interview_btn') {
        if(interview_data.length === 0) {
            Blank_inter_sec.classList.remove('hidden');
        } else {
            Blank_inter_sec.classList.add('hidden');
        }
    }

    else if(current_status === 'reject_btn') {
        if(reject_data.length === 0) {
          

  Blank_inter_sec.classList.remove('hidden');
        } else {
            Blank_inter_sec.classList.add('hidden');
        }
    }

    else if(current_status==='all_btn') {
        Blank_inter_sec.classList.add('hidden');
    }
}


function updateJobCounts() {
    // Count number of jobs currently visible in the section
    let visibleJobs = 0;

    if (current_status === 'all_btn') {
        visibleJobs = cardsElement.children.length;
    } else {
        visibleJobs = filter_sec.children.length;
    }

    avalilable_job.innerText = `${num_card} of ${visibleJobs} Jobs`;
}
