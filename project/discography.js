uan_val = false
tmh_val = false
mm_val = false
f_val = false
mam_val = false

function spotify(){
   
   clicked_elem = event.srcElement.id

   elem = document.getElementById(String(clicked_elem + "_spotify")).style
   value = String(clicked_elem + "_val")



   playlist = document.getElementById("playlist").style

   if (elem.visibility == "visible"){
      
      if (value == "uan_val"){
         uan_val = false
      }

      if (value == "tmh_val"){
         tmh_val = false
      }

      if (value == "mm_val"){
         mm_val = false
      }

      if (value == "f_val"){
         f_val = false
      }

      if (value== "mam_val"){
         mam_val = false
      }

      elem.visibility = "hidden"
      if ((uan_val == false) & (tmh_val == false) & (mm_val == false) & (f_val == false) & (mam_val == false)){
         playlist.display = "none"
      }
      
   }
   else{
      if (value == "uan_val"){
         uan_val = true
      }

      if (value == "tmh_val"){
         tmh_val = true
      }

      if (value == "mm_val"){
         mm_val = true
      }

      if (value == "f_val"){
         f_val = true
      }

      if (value == "mam_val"){
         mam_val = true
      }

      playlist.display = "block"
      elem.visibility = "visible"

      }

