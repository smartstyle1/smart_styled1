document.addEventListener('DOMContentLoaded', () => {
  // Initialize GSAP ScrollTrigger
  gsap.registerPlugin(ScrollTrigger);

  // // Custom cursor
  // const cursor = document.querySelector('.cursor');
  // const cursorFollower = document.querySelector('.cursor-follower');

  // document.addEventListener('mousemove', (e) => {
  //   cursor.style.left = e.clientX + 'px';
  //   cursor.style.top = e.clientY + 'px';
    
  //   gsap.to(cursorFollower, {
  //     x: e.clientX - 15,
  //     y: e.clientY - 15,
  //     duration: 0.2
  //   });
  // });

  // // Cursor hover effects
  // document.querySelectorAll('a, button').forEach(el => {
  //   el.addEventListener('mouseenter', () => {
  //     cursor.style.transform = 'scale(2)';
  //     cursorFollower.style.transform = 'scale(2)';
  //   });
    
  //   el.addEventListener('mouseleave', () => {
  //     cursor.style.transform = 'scale(1)';
  //     cursorFollower.style.transform = 'scale(1)';
  //   });
  // });

  // Animated text
  const text = document.querySelector('.sec-text');
  const textLoad = () => {
    setTimeout(() => {
      text.textContent = "Smartstyle";
    }, 0);
    setTimeout(() => {
      text.textContent = "UI Designer";
    }, 4000);
    setTimeout(() => {
      text.textContent = "Web Creator";
    }, 8000);
  }
  textLoad();
  setInterval(textLoad, 12000);

  // Menu Toggle
  const menuBtn = document.querySelector('.menu-btn');
  const menu = document.querySelector('.menu');
  
  menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('menu-active');
    menu.classList.toggle('active');
  });

  // Update theme toggle functionality
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;
  const html = document.documentElement;

  themeToggle.addEventListener('change', () => {
    if (themeToggle.checked) {
      body.classList.remove('light-theme');
      body.classList.add('dark-theme');
      html.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      body.classList.remove('dark-theme');
      body.classList.add('light-theme');
      html.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  });

  // Check saved theme preference
  const savedTheme = localStorage.getItem('theme') || 'light';
  if (savedTheme === 'dark') {
    themeToggle.checked = true;
    body.classList.add('dark-theme');
    html.classList.add('dark');
  }

  // Scroll Animations
  gsap.from('.skill-card', {
    scrollTrigger: {
      trigger: '.skills',
      start: 'top center',
      toggleActions: 'play none none reverse'
    },
    y: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.2
  });

  gsap.from('.project-card', {
    scrollTrigger: {
      trigger: '.projects',
      start: 'top center',
      toggleActions: 'play none none reverse'
    },
    y: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.2
  });

  // Profile card tilt effect
  const profileFrame = document.querySelector('.profile-frame');
  
  profileFrame.addEventListener('mousemove', (e) => {
    const rect = profileFrame.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    
    profileFrame.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });
  
  profileFrame.addEventListener('mouseleave', () => {
    profileFrame.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
  });

  // Smooth scroll for menu links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        gsap.to(window, {
          duration: 1,
          scrollTo: targetElement,
          ease: 'power2.inOut'
        });
        
        menuBtn.classList.remove('menu-active');
        menu.classList.remove('active');
      }
    });
  });
});