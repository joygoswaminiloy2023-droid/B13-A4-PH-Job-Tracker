// section_1
// adding number of jobs dynamically
  
let interview_data=[];
let reject_data=[];
let current_status='all_btn'
  
let Blank_inter_sec=document.getElementById('Blank_inter_sec');


let total_display= document.getElementById('total_display');
let aj=total_display.innerText;

let inter_display=document.getElementById('inter_display');

const maincontainer=document.querySelector('main');


filter_sec=document.getElementById('filterd_sec');

let avalilable_job= document.getElementById('avalilable_job');

    let cardsElement=document.getElementById('all_sec');
    let num_card=cardsElement.children.length;
  total_display.innerText=num_card;






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
inter_display.innerText = interview_data.length;
     fetch_data_interview(); 
     blank_sec();
    

}

else if(btn_id=='all_btn'){
  cardsElement.classList.remove('hidden');
filter_sec.classList.add('hidden');
 updateJobCounts();
}

else if(btn_id=='reject_btn'){
cardsElement.classList.add('hidden');
filter_sec.classList.remove('hidden');
inter_display.innerText = interview_data.length;


   }
  


  }


