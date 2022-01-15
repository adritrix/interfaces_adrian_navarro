
        var ty1=document.getElementById('ty1');
        var ty2=document.getElementById('ty2');
        var ty3=document.getElementById('ty3');
        var ty4=document.getElementById('ty4');
        
        function despliegueTy0() {
            var ty1=document.getElementById('ty1');
            var ty2=document.getElementById('ty2');
            var ty3=document.getElementById('ty3');
            var ty4=document.getElementById('ty4');

            clearTimeout(evento1);
            clearTimeout(evento2);
            clearTimeout(evento3);
            clearTimeout(evento4);
            

            ty1.style.display="none";
            ty2.style.display="none";
            ty3.style.display="none";
            ty4.style.display="none";

            var evento1=setTimeout(despliegueTy1,1000);
            var evento2=setTimeout(despliegueTy2,2000);
            var evento3=setTimeout(despliegueTy3,3000);
            var evento4=setTimeout(despliegueTy4,4000);
        }
        function despliegueTy1(){
            var ty1=document.getElementById('ty1');
            ty1.style.display="block";
            ty1.onclick=despliegueTy0;
            // ty1.style.backgroundColor="grey";
        }

        function despliegueTy2(){
            var ty2=document.getElementById('ty2');
            ty2.style.display="block";
            ty2.onclick=despliegueTy0;
            // ty1.style.backgroundColor="grey";
        }

        function despliegueTy3(){
            var ty3=document.getElementById('ty3');
            ty3.style.display="block";
            ty3.onclick=despliegueTy0;
            // ty1.style.backgroundColor="grey";
        }

        function despliegueTy4(){
            var ty4=document.getElementById('ty4');
            ty4.style.display="block";
            ty4.onclick=despliegueTy0;
            // ty1.style.backgroundColor="grey";
        }
        function main(){
            despliegueTy0();
        }
        window.onload=main;