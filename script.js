
//JavaScript for Functionality
   
        document.addEventListener('DOMContentLoaded', () => {
            const hamburger = document.getElementById('hamburger-menu');
            const navLinks = document.querySelector('.nav-links');
            const navBar = document.getElementById('navbar');

            // 1. Toggle mobile menu visibility
            hamburger.addEventListener('click', () => {
                navLinks.classList.toggle('show'); // Use 'show' class to control mobile visibility
            });

            // 2. Close mobile menu when a link is clicked
            navLinks.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => {
                    if (navLinks.classList.contains('show')) {
                        navLinks.classList.remove('show');
                    }
                });
            });
            
            // 3. Add a subtle shadow to the navbar when scrolling
            window.addEventListener('scroll', () => {
                if (window.scrollY > 0) {
                    navBar.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.5)';
                } else {
                    navBar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.3)';
                }
            });
        });

        // Chat Widget Functions
        function toggleChat() {
            const chatBox = document.getElementById('chat-box');
            chatBox.style.display = chatBox.style.display === 'flex' ? 'none' : 'flex';
        }

        function handleChatSubmit(event) {
            event.preventDefault();
            const email = document.getElementById('chat-email').value;
            const messageText = document.getElementById('chat-message-text').value;
            const messageDisplay = document.getElementById('chat-message');
            
            // Simulate sending the message
            document.getElementById('contact-chat-form').style.display = 'none';
            messageDisplay.innerHTML = `Thanks! Message sent successfully. I will reply to ${email} shortly.`;
            messageDisplay.style.display = 'block';

            // Reset after 5 seconds and prepare for new message
            setTimeout(() => {
                document.getElementById('contact-chat-form').reset();
                // Ensure the form is displayed again as a flex column
                document.getElementById('contact-chat-form').style.display = 'flex'; 
                messageDisplay.style.display = 'none';
            }, 5000);
        }
   