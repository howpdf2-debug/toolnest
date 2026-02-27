
function generateSEO(){
  const title=document.getElementById("title").value;
  const desc=document.getElementById("description").value;
  const keywords=document.getElementById("keywords").value;

  const meta=`

<meta name="description" content="${desc}">
<meta name="keywords" content="${keywords}">
<link rel="canonical" href="YOUR_URL_HERE">
`;

  document.getElementById("output").value=meta.trim();
}

/* AI-LIKE REWRITE (SMART LOGIC) */
function rewriteContent(){
  const text=document.getElementById("description");
  if(!text.value){alert("Enter description first");return;}

  let rewritten=text.value
    .replace(/best/gi,"top")
    .replace(/free/gi,"no-cost")
    .replace(/online/gi,"web-based")
    .replace(/tool/gi,"utility");

  text.value=rewritten;
}

/* FAQ SCHEMA GENERATOR */
function generateFAQ(){
  const input=document.getElementById("faqInput").value.trim();
  if(!input){alert("Enter FAQ first");return;}

  const lines=input.split("\n");
  let faqItems=[];

  lines.forEach(line=>{
    const parts=line.split("?");
    if(parts.length>1){
      faqItems.push({
        "@type":"Question",
        "name":parts[0]+"?",
        "acceptedAnswer":{
          "@type":"Answer",
          "text":parts.slice(1).join("?").trim()
        }
      });
    }
  });

  const schema={
    "@context":"https://schema.org",
    "@type":"FAQPage",
    "mainEntity":faqItems
  };

  document.getElementById("faqOutput").value=
    `<script type="application/ld+json">\n${JSON.stringify(schema,null,2)}\n</script>`;
}
