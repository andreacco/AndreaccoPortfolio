import '../../../../Styles/Welcome/Welcome.scss';

export default function Welcome() {
  return (
    <section className="Welcome-div">
      {/* <div className='Welcome-information-text'> */}
        <div className='text-div'>
          <div className='first-Line'>
            <span>Hello! Welcome to my world!</span>
            <p>My name is... </p>
          </div>
          <div className='My-Name'>
            <h1>Andrea Carolina</h1>
            <h1>Carvajal Osorio</h1>
          </div>
          <br/>
          <div className='third-Line'>
            <h3>I'm a Full Stack developer</h3>
            <h3>focused on Front-End</h3>
          </div>
          <br/>
          <div className='wrapper'>
            <div className='static-text'>I Love creating</div>
            <ul className='dinamic-texts'>
              <li>UX/UI Websites</li>
              <li>E-Commerce</li>
              <li>3D Webistes</li>
              <li>Softwares</li>
              <li>Social Media</li>
            </ul>
          </div>
          <a href="mailto:andreacc9199@gmail.com?Subject=Hi%20Andrea!%20I%20want%20to%20talk%20with%20you">
            <button>Let's talk!</button>
          </a>
        </div>
        <svg>	
          <clipPath id="clip">
            <path>
              <animate 
              attributeName='d' 
              dur='15000ms' 
              repeatCount='indefinite'
              values='M 948 291 Q 946 372 875 418 Q 804 464 755 515 Q 706 566 634 566 Q 562 566 503 546 Q 444 526 364 555 Q 284 584 244 521 Q 204 458 122 418 Q 40 378 29 294 Q 18 210 70 141 Q 122 72 195 44 Q 268 16 260 -102 Q 252 -220 339 -217 Q 426 -214 494 -180 Q 562 -146 634 -147 Q 706 -148 730 -76 Q 754 -4 855 20 Q 956 44 953 127 Q 950 210 948 291 Z;

              M 865 281 Q 892 352 859 418 Q 826 484 755 506 Q 684 528 621 536 Q 558 544 493 578 Q 428 612 343 620 Q 258 628 201 568 Q 144 508 151 421 Q 158 334 174 272 Q 190 210 178 149 Q 166 88 144 -10 Q 122 -108 228 -93 Q 334 -78 390 -90 Q 446 -102 513 -173 Q 580 -244 618 -151 Q 656 -58 734 -54 Q 812 -50 837 14 Q 862 78 850 144 Q 838 210 865 281 Z;

              M 895 278 Q 874 346 844 409 Q 814 472 748 498 Q 682 524 631 592 Q 580 660 501 656 Q 422 652 365 598 Q 308 544 244 511 Q 180 478 139 417 Q 98 356 138 283 Q 178 210 129 133 Q 80 56 156 21 Q 232 -14 268 -72 Q 304 -130 365 -168 Q 426 -206 504 -228 Q 582 -250 666 -236 Q 750 -222 778 -134 Q 806 -46 855 8 Q 904 62 910 136 Q 916 210 895 278 Z;

              M 866 273 Q 848 336 863 432 Q 878 528 788 541 Q 698 554 627 542 Q 556 530 502 519 Q 448 508 367 544 Q 286 580 253 512 Q 220 444 138 408 Q 56 372 91 291 Q 126 210 156 153 Q 186 96 152 -8 Q 118 -112 207 -127 Q 296 -142 371 -120 Q 446 -98 509 -149 Q 572 -200 659 -209 Q 746 -218 802 -154 Q 858 -90 864 -7 Q 870 76 877 143 Q 884 210 866 273 Z;
              
              M 948 291 Q 946 372 875 418 Q 804 464 755 515 Q 706 566 634 566 Q 562 566 503 546 Q 444 526 364 555 Q 284 584 244 521 Q 204 458 122 418 Q 40 378 29 294 Q 18 210 70 141 Q 122 72 195 44 Q 268 16 260 -102 Q 252 -220 339 -217 Q 426 -214 494 -180 Q 562 -146 634 -147 Q 706 -148 730 -76 Q 754 -4 855 20 Q 956 44 953 127 Q 950 210 948 291 Z;'/>
            </path>
          </clipPath>
        </svg>
        <div className='blob-container'>
          <div className="blob">
            <div className='img'>
              <img className='welcome-img' src='https://res.cloudinary.com/drdbdhlp2/image/upload/v1665283791/Portfolio/About%20Me%20imgs/welcome-img_compressed-compressed_bipkza.jpg' alt='Andrea-saying-Hi!' height='450px'/>
            </div>
          </div>
        </div>
      {/* </div> */}
    </section>
  )
}
  {/* 
  EL QUE NOS GUSTO
  values='M 948 431 Q 946 512 875 558 Q 804 604 755 655 Q 706 706 634 706 Q 562 706 503 686 Q 444 666 364 695 Q 284 724 244 661 Q 204 598 122 558 Q 40 518 29 434 Q 18 350 70 281 Q 122 212 195 184 Q 268 156 260 38 Q 252 -80 339 -77 Q 426 -74 494 -40 Q 562 -6 634 -7 Q 706 -8 730 64 Q 754 136 855 160 Q 956 184 953 267 Q 950 350 948 431 Z;

  M 865 421 Q 892 492 859 558 Q 826 624 755 646 Q 684 668 621 676 Q 558 684 493 718 Q 428 752 343 760 Q 258 768 201 708 Q 144 648 151 561 Q 158 474 174 412 Q 190 350 178 289 Q 166 228 144 130 Q 122 32 228 47 Q 334 62 390 50 Q 446 38 513 -33 Q 580 -104 618 -11 Q 656 82 734 86 Q 812 90 837 154 Q 862 218 850 284 Q 838 350 865 421 Z;

  M 895 418 Q 874 486 844 549 Q 814 612 748 638 Q 682 664 631 732 Q 580 800 501 796 Q 422 792 365 738 Q 308 684 244 651 Q 180 618 139 557 Q 98 496 138 423 Q 178 350 129 273 Q 80 196 156 161 Q 232 126 268 68 Q 304 10 365 -28 Q 426 -66 504 -88 Q 582 -110 666 -96 Q 750 -82 778 6 Q 806 94 855 148 Q 904 202 910 276 Q 916 350 895 418 Z;

  M 866 413 Q 848 476 863 572 Q 878 668 788 681 Q 698 694 627 682 Q 556 670 502 659 Q 448 648 367 684 Q 286 720 253 652 Q 220 584 138 548 Q 56 512 91 431 Q 126 350 156 293 Q 186 236 152 132 Q 118 28 207 13 Q 296 -2 371 20 Q 446 42 509 -9 Q 572 -60 659 -69 Q 746 -78 802 -14 Q 858 50 864 133 Q 870 216 877 283 Q 884 350 866 413 Z;
  
  M 948 431 Q 946 512 875 558 Q 804 604 755 655 Q 706 706 634 706 Q 562 706 503 686 Q 444 666 364 695 Q 284 724 244 661 Q 204 598 122 558 Q 40 518 29 434 Q 18 350 70 281 Q 122 212 195 184 Q 268 156 260 38 Q 252 -80 339 -77 Q 426 -74 494 -40 Q 562 -6 634 -7 Q 706 -8 730 64 Q 754 136 855 160 Q 956 184 953 267 Q 950 350 948 431 Z;'/> */}