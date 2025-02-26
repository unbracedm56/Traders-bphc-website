var tl=gsap.timeline();
 
tl.from(".brand",{
  y:-20,
  duration:1,
  delay:0.5,
  opacity:0,
})
tl.from(".center-links",{
  y:-20,
  duration:1,
  opacity:0,
  stagger:0.8,
})
tl.from(".home-section",{
  y:-20,
  opacity:0,
  duration:1,
  stagger:0.3,
})

document.addEventListener('DOMContentLoaded', function() {
    // Sample data for PORs by year
    const yearbookData = [
      {
        year: 2012,
        pors: [
          { position: "President", name: "John Doe" },
          { position: "Vice President", name: "Jane Smith" },
          { position: "Treasurer", name: "Robert Johnson" }
        ]
      },
      {
        year: 2013,
        pors: [
          { position: "President", name: "Emily Davis" },
          { position: "Vice President", name: "Michael Brown" },
          { position: "Treasurer", name: "Sarah Wilson" }
        ]
      },
      {
        year: 2014,
        pors: [
          { position: "President", name: "David Miller" },
          { position: "Vice President", name: "Lisa Anderson" },
          { position: "Treasurer", name: "James Taylor" }
        ]
      },
      {
        year: 2015,
        pors: [
          { position: "President", name: "Jennifer White" },
          { position: "Vice President", name: "Thomas Martin" },
          { position: "Treasurer", name: "Jessica Clark" }
        ]
      },
      {
        year: 2016,
        pors: [
          { position: "President", name: "Daniel Lewis" },
          { position: "Vice President", name: "Michelle Walker" },
          { position: "Treasurer", name: "Christopher Hall" }
        ]
      },
      {
        year: 2017,
        pors: [
          { position: "President", name: "Matthew Allen" },
          { position: "Vice President", name: "Amanda Young" },
          { position: "Treasurer", name: "Ryan King" }
        ]
      },
      {
        year: 2018,
        pors: [
          { position: "President", name: "Andrew Scott" },
          { position: "Vice President", name: "Olivia Green" },
          { position: "Treasurer", name: "Kevin Baker" }
        ]
      },
      {
        year: 2019,
        pors: [
          { position: "President", name: "Brian Adams" },
          { position: "Vice President", name: "Sophia Carter" },
          { position: "Treasurer", name: "Nathan Hill" }
        ]
      },
      {
        year: 2020,
        pors: [
          { position: "President", name: "William Evans" },
          { position: "Vice President", name: "Emma Phillips" },
          { position: "Treasurer", name: "Tyler Ross" }
        ]
      },
      {
        year: 2021,
        pors: [
          { position: "President", name: "Joshua Turner" },
          { position: "Vice President", name: "Mia Campbell" },
          { position: "Treasurer", name: "Brandon Morris" }
        ]
      },
      {
        year: 2022,
        pors: [
          { position: "President", name: "Jacob Parker" },
          { position: "Vice President", name: "Abigail Reed" },
          { position: "Treasurer", name: "Ethan Cooper" }
        ]
      },
      {
        year: 2023,
        pors: [
          { position: "President", name: "Samuel Brooks" },
          { position: "Vice President", name: "Hannah Price" },
          { position: "Treasurer", name: "Caleb Hughes" }
        ]
      },
      {
        year: 2024,
        pors: [
          { position: "President", name: "Alexander Ward" },
          { position: "Vice President", name: "Grace Foster" },
          { position: "Treasurer", name: "Lucas Rivera" }
        ]
      }
    ];
  
    // Generate timeline cards
    const outerContainer = document.querySelector('.outer');
    
    if (outerContainer) {
      yearbookData.forEach(yearData => {
        // Create card elements
        const card = document.createElement('div');
        card.className = 'card';
        
        const info = document.createElement('div');
        info.className = 'info';
        
        const boxTitle = document.createElement('h3');
        boxTitle.className = 'box-title';
        boxTitle.textContent = yearData.year;
        
        const chevron = document.createElement('span');
        chevron.className = 'chevron';
        chevron.innerHTML = '▼';
        boxTitle.appendChild(chevron);
        
        const porContent = document.createElement('div');
        porContent.className = 'por-content';
        
        const porList = document.createElement('ul');
        porList.className = 'por-list';
        
        // Add PORs to the list
        yearData.pors.forEach(por => {
          const porItem = document.createElement('li');
          porItem.className = 'por-item';
          
          const position = document.createElement('span');
          position.className = 'position';
          position.textContent = por.position;
          
          const name = document.createElement('span');
          name.className = 'name';
          name.textContent = por.name;
          
          porItem.appendChild(position);
          porItem.appendChild(name);
          porList.appendChild(porItem);
        });
        
        porContent.appendChild(porList);
        info.appendChild(boxTitle);
        info.appendChild(porContent);
        card.appendChild(info);
        outerContainer.appendChild(card);
        
        // Add click event to toggle dropdown
        info.addEventListener('click', function() {
          porContent.classList.toggle('active');
          chevron.classList.toggle('active');
        });
      });
    }
    
    // Toggle menu function
    window.toggleMenu = function() {
      const menu = document.querySelector('.navbar ul');
      if (menu) {
        menu.classList.toggle('active');
      }
    };
  });