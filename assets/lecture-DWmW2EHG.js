import{g as n}from"./index-B2WcPv7I.js";const u={"Lớp 9":"bg-indigo-50 text-indigo-600 border-indigo-100","Luyện Thi 10":"bg-pink-50 text-pink-600 border-pink-100","Mất Gốc":"bg-orange-50 text-orange-600 border-orange-100","Đại Số":"bg-blue-50 text-blue-600 border-blue-100","Hình Học":"bg-emerald-50 text-emerald-600 border-emerald-100"},l=[{id:"RSJ_czfTFeQ",title:"Hệ thức lượng trong tam giác vuông",cat:"Lớp 9",sub:"Hình Học",time:"45:00",views:"1.2k",img:"https://img.youtube.com/vi/RSJ_czfTFeQ/maxresdefault.jpg"},{id:"RSJ_czfTFeQ",title:"Hàm số bậc nhất và đồ thị",cat:"Lớp 9",sub:"Đại Số",time:"30:00",views:"850",img:"https://img.youtube.com/vi/RSJ_czfTFeQ/maxresdefault.jpg"},{id:"RSJ_czfTFeQ",title:"Giải hệ phương trình bằng phương pháp thế",cat:"Lớp 9",sub:"Đại Số",time:"40:00",views:"2.1k",img:"https://img.youtube.com/vi/RSJ_czfTFeQ/maxresdefault.jpg"},{id:"RSJ_czfTFeQ",title:"Ôn thi vào 10: Chuyên đề Rút gọn",cat:"Luyện Thi 10",sub:"Đại Số",time:"60:00",views:"5.3k",img:"https://img.youtube.com/vi/RSJ_czfTFeQ/maxresdefault.jpg"},{id:"RSJ_czfTFeQ",title:"Ôn thi vào 10: Giải toán bằng cách lập PT",cat:"Luyện Thi 10",sub:"Đại Số",time:"55:00",views:"3.4k",img:"https://img.youtube.com/vi/RSJ_czfTFeQ/maxresdefault.jpg"},{id:"RSJ_czfTFeQ",title:"Lấy gốc Hình học: Góc nội tiếp",cat:"Mất Gốc",sub:"Hình Học",time:"35:00",views:"900",img:"https://img.youtube.com/vi/RSJ_czfTFeQ/maxresdefault.jpg"},{id:"RSJ_czfTFeQ",title:"Bất đẳng thức Cosi (Nâng cao)",cat:"Luyện Thi 10",sub:"Đại Số",time:"50:00",views:"10k",img:"https://img.youtube.com/vi/RSJ_czfTFeQ/maxresdefault.jpg"},{id:"RSJ_czfTFeQ",title:"Hình học 9: Đường tròn ngoại tiếp",cat:"Lớp 9",sub:"Hình Học",time:"42:00",views:"1.5k",img:"https://img.youtube.com/vi/RSJ_czfTFeQ/maxresdefault.jpg"},{id:"RSJ_czfTFeQ",title:"Chuyên đề VS: Định lý Vi-et",cat:"Luyện Thi 10",sub:"Đại Số",time:"48:00",views:"4.2k",img:"https://img.youtube.com/vi/RSJ_czfTFeQ/maxresdefault.jpg"}],m=[...l,...l,...l],r=document.getElementById("course-grid"),p=document.querySelectorAll(".filter-btn");function f(t="all"){r.innerHTML="",(t==="all"?m:m.filter(e=>e.cat===t)).forEach((e,T)=>{const o=document.createElement("div");o.className="group bg-white rounded-2xl p-3 border border-slate-100 shadow-pro card-hover cursor-pointer relative overflow-hidden",o.dataset.videoId=e.id;const x=u[e.cat]||"bg-slate-100 text-slate-600",w=u[e.sub]||"bg-slate-50 text-slate-500";o.innerHTML=`
            <div class="aspect-video w-full rounded-xl overflow-hidden relative bg-slate-100">
                <img src="${e.img}" alt="${e.title}" class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"/>
                
                <!-- Overlay Gradient -->
                <div class="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <!-- Play Button -->
                <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-90 group-hover:scale-100">
                    <div class="w-14 h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/50 shadow-2xl">
                        <svg class="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                    </div>
                </div>

                <div class="absolute top-2 right-2 bg-black/60 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-1 rounded-md">
                    ${e.time}
                </div>
            </div>

            <div class="pt-4 pb-2 px-1">
                <div class="flex gap-2 mb-3">
                    <span class="px-2.5 py-0.5 rounded-md text-[10px] font-bold border ${x.replace("bg-","bg-opacity-50 ")} uppercase tracking-wider">${e.cat}</span>
                    <span class="px-2.5 py-0.5 rounded-md text-[10px] font-bold border ${w} uppercase tracking-wider">${e.sub}</span>
                </div>
                
                <h3 class="font-display font-bold text-lg leading-snug text-slate-800 mb-2 group-hover:text-indigo-600 transition-colors line-clamp-2">
                    ${e.title}
                </h3>
                
                <div class="flex items-center justify-between text-xs font-medium text-slate-400 mt-4">
                    <div class="flex items-center gap-1">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
                        ${e.views} xem
                    </div>
                    <div class="flex items-center gap-1 text-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 duration-300">
                        Học ngay <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                    </div>
                </div>
            </div>
        `,r.appendChild(o),o.addEventListener("click",()=>k(e.id))}),n.fromTo(r.children,{y:20,opacity:0},{y:0,opacity:1,duration:.6,stagger:.05,ease:"power2.out"})}p.forEach(t=>{t.addEventListener("click",()=>{p.forEach(d=>{d.className="filter-btn px-5 py-2.5 rounded-xl text-sm font-bold text-slate-600 hover:bg-slate-100 transition-all"}),t.className="filter-btn active px-5 py-2.5 rounded-xl text-sm font-bold bg-slate-900 text-white transition-all shadow-lg shadow-indigo-500/20",f(t.dataset.filter)})});f("all");const i=document.getElementById("video-modal"),a=document.getElementById("modal-backdrop"),v=document.getElementById("modal-content"),g=document.getElementById("close-modal"),y=document.getElementById("youtube-player");function k(t){i&&(i.classList.remove("hidden"),n.to(a,{opacity:1,duration:.3}),n.to(v,{opacity:1,scale:1,duration:.4,ease:"back.out(1.2)"}),y.innerHTML=`
        <iframe 
            width="100%" 
            height="100%" 
            src="https://www.youtube.com/embed/${t}?autoplay=1" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowfullscreen>
        </iframe>
    `,document.body.style.overflow="hidden")}function c(){i&&(n.to(a,{opacity:0,duration:.3}),n.to(v,{opacity:0,scale:.95,duration:.3}),setTimeout(()=>{i.classList.add("hidden"),y.innerHTML="",document.body.style.overflow=""},300))}g&&g.addEventListener("click",c);a&&a.addEventListener("click",c);document.addEventListener("keydown",t=>{t.key==="Escape"&&i&&!i.classList.contains("hidden")&&c()});const b=document.getElementById("mobile-menu-btn"),h=document.getElementById("close-menu-btn"),s=document.getElementById("mobile-menu");b&&s&&b.addEventListener("click",()=>{s.classList.remove("translate-x-full")});h&&s&&h.addEventListener("click",()=>{s.classList.add("translate-x-full")});
