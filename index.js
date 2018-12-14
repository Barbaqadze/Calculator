function end(val) {
    document.getElementById('IQ').value = val;
}

function math(val) {

    document.getElementById('IQ').value+=val   
}

function operation() {
        var a,b,c,d,i,f=1,g,k,y,x,z,v;
        k = document.getElementById('IQ').value;
        x = k.indexOf('^');
        y = k.indexOf('√');
        z = k.indexOf('!');
        v = k.indexOf('%');

        if(y==0) {
        c = k.substring(1,k.toString().length)
        end(Math.sqrt(c));
            }

        else if(x>0) {
            a = k.substring(0,x);
            b = k.substring(x+1,k.toString().length)
            end(Math.pow(a,b));
        }
        else if(z>0){
            d = k.substring(0,k.toString().length-1)
            for(i=1; i<=d; i++) {
                f = f*i;
            }
            end(f);
        }
        else if(v>0) {
            g = k.substring(0,k.toString().length-1)
            end(eval(g)/100);
        }
        else {
            end(eval(k));
        }
    
    
    //end(eval(document.getElementById('IQ').value))
    
}



function zero() {
    document.getElementById('IQ').value = '';
}

function minus() {
   var x;
   var y;
   x = document.getElementById('IQ').value;
   y = x.substring(0, x.toString().length-1);
   document.getElementById('IQ').value = y; 
    

}

function history(val) {
    var x,y,i;
    x = [];
    if(val=='clear') {
        document.getElementById('rest').innerHTML = ""
    }
    else if(val=='minus') {
        i = document.getElementById('rest').innerHTML;
        y = i.substring(0, i.toString().length-1);
        document.getElementById('rest').innerHTML = y;
    }
    else if(val=='fesvi'){
        document.getElementById('rest').innerHTML +=  document.getElementById('IQ').value ;
    }
    else if(val =='=') {
        document.getElementById('rest').innerHTML += '=' + document.getElementById('IQ').value+ '<br>' + document.getElementById('IQ').value;
    }
    else {
        x[0] = val;
        
        document.getElementById('rest').innerHTML += x[0];
    }
    
    
    

}

    

function historyzero() {
    document.getElementById('rest').value = 0;
}

