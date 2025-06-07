
l2.onclick=function(){
    let oldImg = document.getElementById('dynamic-img');
if (oldImg) oldImg.remove();

let oldLink = document.getElementById('dynamic-img-link');
if (oldLink) oldLink.remove();
p="Hi! I'm an aspiring web developer and designer with a passion for creating clean, simple, and user-friendly websites. While I don't have any professional experience or completed projects yet, I'm eager to grow and develop my skills through hands-on practice and continuous learning. I’m especially interested in how design and technology work together to solve problems and improve people's everyday experiences. My goal is to build websites that not only look great but are also intuitive and accessible. As I continue on this journey, I’m excited to take on new challenges, build my portfolio, and eventually work on real-world projects that make an impact."

paragraph.textContent=p; 





heading="ABOUT ME"
h1.textContent=heading;

dc="Design Tools:"
h2.textContent=dc

p1="Figma - UI/UX design, wireframes, and prototyping"
p2="Canva - Quick, polished visuals for social media, branding, and content creation"
p3="Webflow - Visual development, responsive layouts, and animations XD"
p4="VS Code — My main code editor for efficient and organized development"
p5="HTML & CSS — Clean, semantic structure and styling"
p6="JavaScript — Interactivity, dynamic content, and user experience enhancements"
p7="I love combining design and code to create clean, responsive, and user-friendly digital experiences."

tool.textContent=p1
tool2.textContent=p2
tool3.textContent=p3
tool4.textContent=p4
tool5.textContent=p5
tool6.textContent=p6
tool7.textContent=p7

oheader="Development Tools:"
h3.textContent=oheader

fheader="Front-End Development:"
h4.textContent=fheader

herotext.textContent=null
hhp.textContent=null
contact.textContent=null
cp.textContent=null
mj.textContent=null


   


}

l1.onclick=function(){
let oldImg = document.getElementById('dynamic-img');
if (oldImg) oldImg.remove();

let oldLink = document.getElementById('dynamic-img-link');
if (oldLink) oldLink.remove();

ht="Shonell Shanu"
herotext.textContent=ht

hp="A Front-End Developer"
hhp.textContent=hp



tool.textContent=null
tool2.textContent=null
tool3.textContent=null
tool4.textContent=null
tool5.textContent=null
tool6.textContent=null
tool7.textContent=null


h3.textContent=null
h2.textContent=null
h1.textContent=null
h4.textContent=null
paragraph.textContent=null 
contact.textContent=null
cp.textContent=null
mj.textContent=null

}

l4.onclick=function(){

let oldImg = document.getElementById('dynamic-img');
if (oldImg) oldImg.remove();

let oldLink = document.getElementById('dynamic-img-link');
if (oldLink) oldLink.remove();





c="Contact Details"

contact.textContent=c

ppp="📩:luvvshone@gmail.com"
cp.textContent=ppp



hhp.textContent=null

tool.textContent=null
tool2.textContent=null
tool3.textContent=null
tool4.textContent=null
tool5.textContent=null
tool6.textContent=null
tool7.textContent=null


h3.textContent=null
h2.textContent=null
h1.textContent=null
h4.textContent=null
paragraph.textContent=null 
herotext.textContent=null
mj.textContent=null

}

l3.onclick = function() {
text="My Projects"
mj.textContent=text



contact.textContent=null
cp.textContent=null

hhp.textContent=null

tool.textContent=null
tool2.textContent=null
tool3.textContent=null
tool4.textContent=null
tool5.textContent=null
tool6.textContent=null
tool7.textContent=null


h3.textContent=null
h2.textContent=null
h1.textContent=null
h4.textContent=null
paragraph.textContent=null 
herotext.textContent=null




    let oldImg = document.getElementById('dynamic-img');
    if (oldImg) oldImg.remove();

    let oldLink = document.getElementById('dynamic-img-link');
    if (oldLink) oldLink.remove();

    
    const link = document.createElement('a');
    link.href = "https://shonell-cell.github.io/other/"; // <-- your target link
    link.target = "_blank";
    link.id = "dynamic-img-link";

    
    const img = document.createElement('img');
    img.id = 'dynamic-img';
    img.src = "img/Screenshot 2025-06-04 004207.png";
    img.alt = 'Dynamic Image';
    img.style.display = 'block';
    img.style.margin = '30px auto';
    img.style.maxWidth = '400px';

    img.style.borderRadius = '40px';

    // Put the image inside the link
    link.appendChild(img);

    // Add to #content
    document.getElementById('content').appendChild(link);
}
