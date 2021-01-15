const el = document.createElement('pwa-update');
document.body.appendChild(el);
const mainTextOptions = [
   'QR Code Gives Wealth And Beauty',
   "The Man From QR Code, He Says 'Yes' QR Code, There's No Better Way",
   'QR Code, Just The Best',
   'He Who Thinks QR Code Drinks QR Code',
   "Hope It's QR Code, It's QR Code, We Hope It's QR Code",
   'Feel The Raw Naked QR Code Of The Road',
   'A Smooth-Running QR Code Is A Relaxing Experience',
   'Women Love QR Code',
   'QR Code - Today And Tomorrow',
   'Nothing Is Faster Than QR Code',
   'QR Code The Highlife',
   'QR Code Soothes The Nerves',
   'QR Code Will Do Anything For You',
   'QR Code Reaching For The Stars',
   "I'd Do Anything For QR Code",
   'Beanz Meanz QR Code',
   'QR Code For A Brighter Shine',
   'Savour The Flavour Of QR Code',
   'Made In Scotland From QR Code',
   'Out Of The Strong Came Forth QR Code',
   'Get The QR Code Habit',
   'Challenge QR Code',
   'Snap! Crackle! QR Code!',
   'QR Code, The Secret Of Women',
   'No Finer QR Code Can Be Found',
   'I Liked The QR Code So Much, I Bought The Company!',
   "You Wouldn't Want To Miss QR Code",
   'The One And Only QR Code',
   'The Non-Sticky Sticky QR Code',
   'I Lost Weight With QR Code',
   "You've Got Questions",
   "We've Got QR Code",
   'Loves The QR Code You Hate',
   'See The Face You Love Light Up With QR Code',
   'QR Code Outshines The Rest',
   'Which Twin Has The QR Code? ',
   'QR Code Sees All, Knows All',
   'Reach Out And Touch QR Code',
   "QR Code Chews 'Em Up And Spits 'Em Out",
   'Once QR Code, Always QR Code',
   'The Age Of QR Code',
   'They Drink QR Code In The Congo',
   "Please Don't Squeeze The QR Code",
   'Prepare To Want QR Code',
   'You Can On A QR Code, Can Do!',
   'A Glass And A Half In Every QR Code',
   'QR Code, Making People Successful In A Changing World',
   'The President Buys QR Code',
   'Ask The Man From The QR Code',
   "It's My QR Code!",
];
const mainText = document.getElementById('main-text');
const mainTextOptionIndex = Math.floor(Math.random() * mainTextOptions.length);
mainText.innerText = mainTextOptions[mainTextOptionIndex];

const subTextOptions = [
   'Just Like Qr Code Used To Make',
   'Qr Code Not Included',
   'Silly Rabbit, Qr Code Is For Kids',
   'Snap! Crackle! Qr Code!The Art Of Qr Code',
   'The Queen Of Qr Code',
   'Qr Code Shines Through',
   'When The Going Gets Tough, The Tough Get Qr Code',
   'Qr Code New And Improved',
   'Behold The Power Of Qr Code',
   'Qr Code - Enjoy The Difference',
   "I Liked The Qr Code So Much, I Bought The Company! Today's Qr Code, Since 1903",
   'We Do Qr Code Right',
   'Pure Qr Code',
   'Always After Me Qr Code',
   "Don't Get In The Way Of Qr Code",
   'Qr Code, I Want It All',
   'Funky Qr Code',
   'Qr Code - What More Could You Want?Qr Code When Only The Best Will Do',
   "Qr Code, Couldn't Ask For More",
   'Feel The Raw Naked Qr Code Of The Road',
   'Qr Code Quality You Can See',
   'Get Your Qr Code Here',
   'Bridge That Gap With Qr Code',
   'Think Once, Think Twice, Think Qr Code',
   "Sometimes You Feel Like A Qr Code, Sometimes You Don't",
   'Qr Code - Forget The Rest',
   'Give The Dog A Qr Code',
   "Bet You Can't Eat Qr Code",
   'Qr Code - Empowering People',
   'Qr Code Never Sleeps',
   'Ding-Dong! Qr Code Calling!For The Love Of Qr Code',
   'Qr Code Is Your Friend',
   "Let's Talk About Qr Code",
   "You'll Wonder Where The Yellow Went, When You Brush Your Teeth With Qr Code",
   'Say Qr Code',
   'I Was A Qr Code Weakling',
   'Power For Your Qr Code',
   'Gives A Meal Qr Code-Appeal',
   'Qr Code = The Best',
   "It's A Lot Less Qr Code Than A Hover",
   'Qr Code - When You Just Feel Like It',
   'The Qr Code Bars Are On Me!P-P-P-Pick Up A Qr Code',
];
const subText = document.getElementById('sub-text');
const subTextOptionIndex = Math.floor(Math.random() * subTextOptions.length);
subText.innerText = subTextOptions[subTextOptionIndex];

const textInput = document.getElementById('text-input');

const correctValue = (event) => {
   const resultContainer = document.getElementById('result');
   resultContainer.innerHTML = '';

   const resultImg = document.createElement('img');
   resultImg.src = `/${textInput.value}`;
   resultImg.className =
      'object-scale-down object-center h-48 w-full animate__animated animate__fadeInUp';

   const resultBtn = document.createElement('button');
   resultBtn.onclick = (event) => location.replace(`/${textInput.value}`);
   resultBtn.innerText = 'Open QR image';
   resultBtn.className =
      'object-center lg:mx-0 text-gray-800 font-extrabold rounded my-2 md:my-6 py-4 px-8 shadow-lg w-52 animate__animated animate__fadeInUp';
   resultContainer.appendChild(resultImg);
   resultContainer.appendChild(resultBtn);
};

const incorrectValue = (event) =>
   Swal.fire({
      title: 'Error!',
      text: 'Hey buddy! I need you to write something.',
      icon: 'error',
      confirmButtonText: 'Okay',
   });

const form = document.getElementById('form');
form.addEventListener('submit', (event) => {
   event.preventDefault();
   if (textInput.value === '') incorrectValue(event);
   else correctValue(event);
});
