import '../../../../Styles/Welcome/Welcome.scss';
import welcomeImage from '../../../../assets/welcome-img.png'

export default function Welcome() {
  return (
    <section className="Welcome-div">
      <div className='Welcome-information-text'>
        <svg>	
          <clipPath id="clip">
            <path>
              <animate 
              attributeName='d' 
              dur='15000ms' 
              repeatCount='indefinite'
              values='M 948 431 Q 946 512 875 558 Q 804 604 755 655 Q 706 706 634 706 Q 562 706 503 686 Q 444 666 364 695 Q 284 724 244 661 Q 204 598 122 558 Q 40 518 29 434 Q 18 350 70 281 Q 122 212 195 184 Q 268 156 260 38 Q 252 -80 339 -77 Q 426 -74 494 -40 Q 562 -6 634 -7 Q 706 -8 730 64 Q 754 136 855 160 Q 956 184 953 267 Q 950 350 948 431 Z;

              M 865 421 Q 892 492 859 558 Q 826 624 755 646 Q 684 668 621 676 Q 558 684 493 718 Q 428 752 343 760 Q 258 768 201 708 Q 144 648 151 561 Q 158 474 174 412 Q 190 350 178 289 Q 166 228 144 130 Q 122 32 228 47 Q 334 62 390 50 Q 446 38 513 -33 Q 580 -104 618 -11 Q 656 82 734 86 Q 812 90 837 154 Q 862 218 850 284 Q 838 350 865 421 Z;

              M 895 418 Q 874 486 844 549 Q 814 612 748 638 Q 682 664 631 732 Q 580 800 501 796 Q 422 792 365 738 Q 308 684 244 651 Q 180 618 139 557 Q 98 496 138 423 Q 178 350 129 273 Q 80 196 156 161 Q 232 126 268 68 Q 304 10 365 -28 Q 426 -66 504 -88 Q 582 -110 666 -96 Q 750 -82 778 6 Q 806 94 855 148 Q 904 202 910 276 Q 916 350 895 418 Z;

              M 866 413 Q 848 476 863 572 Q 878 668 788 681 Q 698 694 627 682 Q 556 670 502 659 Q 448 648 367 684 Q 286 720 253 652 Q 220 584 138 548 Q 56 512 91 431 Q 126 350 156 293 Q 186 236 152 132 Q 118 28 207 13 Q 296 -2 371 20 Q 446 42 509 -9 Q 572 -60 659 -69 Q 746 -78 802 -14 Q 858 50 864 133 Q 870 216 877 283 Q 884 350 866 413 Z;
              
              M 948 431 Q 946 512 875 558 Q 804 604 755 655 Q 706 706 634 706 Q 562 706 503 686 Q 444 666 364 695 Q 284 724 244 661 Q 204 598 122 558 Q 40 518 29 434 Q 18 350 70 281 Q 122 212 195 184 Q 268 156 260 38 Q 252 -80 339 -77 Q 426 -74 494 -40 Q 562 -6 634 -7 Q 706 -8 730 64 Q 754 136 855 160 Q 956 184 953 267 Q 950 350 948 431 Z;'/>
            </path>
          </clipPath>
        </svg>
        <div className="blob">
          <div className='img'>
            <img className='welcome-img' src={welcomeImage} alt='Andrea-saying-Hi!' height='450px'/>
          </div>
        </div>
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
          <button>Let's talk!</button>
        </div>
      </div>
    </section>
  )
}