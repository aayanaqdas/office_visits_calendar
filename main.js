
        const addEventBtn = document.getElementById('addEventBtn');
        const modalOverlay = document.getElementById('modalOverlay');
        const registrationModal = document.getElementById('registrationModal');

        addEventBtn.addEventListener('click', () => {
            modalOverlay.style.display = 'block';
            registrationModal.style.display = 'block';
        });

        function closeModal() {
            modalOverlay.style.display = 'none';
            registrationModal.style.display = 'none';
        }


        function submitDate() {
            closeModal();
        }
