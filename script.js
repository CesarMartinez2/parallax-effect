            // Load-in Animations
            const observer1 = new IntersectionObserver((entries) => {
              entries.forEach((entry) => {
                  console.log(entry)
                  if (entry.isIntersecting) {
                      entry.target.classList.add('show-fade');
                  } else {
                      // entry.target.classList.remove('show');
                  }
              });
          });
      
          const observer2 = new IntersectionObserver((entries) => {
              entries.forEach((entry) => {
                  console.log(entry)
                  if (entry.isIntersecting) {
                      entry.target.classList.add('show-slide-up');
                  } else {
                      // entry.target.classList.remove('show');
                  }
              });
          });

          const hiddenFadeElements = document.querySelectorAll('.hidden-fade');
          const hiddenSlideUpElements = document.querySelectorAll('.hidden-slide-up');
          hiddenFadeElements.forEach((el) => observer1.observe(el));
          hiddenSlideUpElements.forEach((el) => observer2.observe(el));
