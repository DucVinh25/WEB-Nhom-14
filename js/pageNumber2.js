var currentPage = 1;

        // Khi trang được tải, đặt trang đầu tiên là trang active
        window.onload = function () {
            showPage(currentPage);
        };

        function showPage(pageNumber) {
            document.getElementById('page' + currentPage).style.display = 'none';
            document.getElementById('page' + pageNumber).style.display = 'block';

            // Thay đổi trang active
            document.querySelector('.pagination .page-item.active').classList.remove('active');
            document.querySelector('.pagination .page-item:nth-child(' + (pageNumber + 1) + ')').classList.add('active');

            currentPage = pageNumber;
            document.getElementById('prevPage').style.display = (currentPage === 1) ? 'none' : 'block';
            document.getElementById('nextPage').style.display = (currentPage === 2) ? 'none' : 'block';
        }

        document.getElementById('nextPage').addEventListener('click', function () {
            if (currentPage < 2) {
                showPage(currentPage + 1);
            }
        });

        document.getElementById('prevPage').addEventListener('click', function () {
            if (currentPage > 1) {
                showPage(currentPage - 1);
            }
        });