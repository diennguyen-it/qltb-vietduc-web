function n(t,c){const o=URL.createObjectURL(t),e=document.createElement("a");e.href=o,e.download=c,e.click(),setTimeout(()=>URL.revokeObjectURL(o),3e4)}export{n as d};
