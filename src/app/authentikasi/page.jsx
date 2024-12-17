import Link from "next/link";
import LayoutUtama from "../layouts/layout-utama";
import Image from "next/image";

const Home = () => {
  return (
    <>
      <LayoutUtama>
        <div className="h-screen relative  bg-custom-gradient">
          <div className=" gap-5 flex flex-col mx-auto font-bold font-nunito absolute left-1/2  -translate-x-1/2 justify-around absolute z-20 h-full">
            <div className="mx-auto flex justify-center  flex-col items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="90"
                height="98"
                viewBox="0 0 109 119"
                fill="none"
              >
                <path
                  d="M24.5781 27.3069C12.8427 26.6761 14.01 15.6882 16.0605 10.273C-1.32987 33.112 -1.31977 55.0035 1.86454 60.1131C9.18335 43.71 22.5802 41.0814 28.3637 41.8173C41.9918 23.2693 57.4591 16.6522 62.5917 15.0046C75.3684 10.9039 78.9962 23.2062 53.2855 44.9718C56.4401 47.7477 67.166 54.1196 67.9546 61.3748C43.9795 83.9291 58.6487 94.0233 38.1431 94.0233C21.2341 94.1494 11.013 81.4582 8.01612 75.0966C-4.47632 105.379 21.6338 116.104 36.2503 117.682C82.4345 125.126 115.139 83.1405 108.019 58.8513C102.656 40.5556 79.4691 38.9784 67.9546 40.2401C93.1922 25.8874 87.6712 3.64867 82.7815 2.54462C74.5794 -4.39514 52.7599 7.95984 42.8751 15.0046L24.5781 27.3069Z"
                  fill="#FDFDFD"
                />
                <path
                  d="M45.2414 44.8141L36.8816 43.0791C37.5649 41.4492 41.4243 35.193 54.5477 25.7297C67.671 16.2664 68.7436 20.8403 61.0147 28.8842L45.2414 44.8141Z"
                  fill="#FDFDFD"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="270"
                height="50"
                viewBox="0 0 285 57"
                fill="none"
              >
                <path
                  d="M15.7068 56.5956C14.445 56.5956 12.9055 56.5452 11.0884 56.4442C9.27134 56.3433 7.40378 56.1919 5.48575 55.99C3.61819 55.7881 1.95253 55.6114 0.48877 55.46V2.23837H10.6341V18.9695C11.3913 18.6667 12.325 18.3638 13.4355 18.061C14.5459 17.7582 15.7068 17.5058 16.9182 17.304C18.1801 17.0516 19.341 16.9254 20.401 16.9254C23.9342 16.9254 26.7355 17.6573 28.805 19.1209C30.9249 20.5341 32.4391 22.6539 33.3477 25.4803C34.2562 28.3066 34.7105 31.8648 34.7105 36.1549C34.7105 41.202 34.13 45.2396 32.9691 48.2679C31.8587 51.2457 29.9154 53.3907 27.1393 54.703C24.3632 55.9647 20.5524 56.5956 15.7068 56.5956ZM15.7826 48.1165C18.2558 48.1165 20.0981 47.6875 21.3095 46.8295C22.5209 45.921 23.3285 44.5835 23.7323 42.817C24.1866 41.0506 24.4137 38.8803 24.4137 36.3063C24.4137 33.6818 24.2118 31.5872 23.808 30.0226C23.4042 28.4076 22.7228 27.2467 21.7638 26.5401C20.8552 25.7831 19.5681 25.4046 17.9025 25.4046C17.0949 25.4046 16.2368 25.5055 15.3283 25.7074C14.4197 25.8588 13.5364 26.0607 12.6784 26.313C11.8708 26.5149 11.1894 26.7168 10.6341 26.9187V47.8137C11.3913 47.8641 12.2746 47.9398 13.2841 48.0408C14.2936 48.0913 15.1264 48.1165 15.7826 48.1165ZM58.5572 56.5956C54.3678 56.5956 51.0365 55.889 48.5632 54.4758C46.1405 53.0626 44.3991 50.9176 43.3391 48.0408C42.2792 45.1639 41.7492 41.5553 41.7492 37.2148C41.7492 32.521 42.4053 28.6852 43.7177 25.7074C45.0805 22.7296 47.049 20.5341 49.6232 19.1209C52.1974 17.6573 55.3773 16.9254 59.1629 16.9254C64.7656 16.9254 68.9802 18.3386 71.8067 21.165C74.6838 23.9914 76.1223 28.458 76.1223 34.565L75.668 40.1673H51.8946C51.945 42.9937 52.5255 45.1135 53.6359 46.5267C54.7464 47.9399 56.6644 48.6464 59.39 48.6464C60.9547 48.6464 62.6708 48.6212 64.5384 48.5707C66.406 48.4698 68.2483 48.3688 70.0654 48.2679C71.9329 48.167 73.5229 48.066 74.8352 47.9651L75.0624 55.0058C73.8005 55.2077 72.2105 55.4348 70.2925 55.6871C68.3745 55.9395 66.3807 56.1414 64.3113 56.2928C62.2923 56.4947 60.3743 56.5956 58.5572 56.5956ZM51.8946 33.7323H66.0527C66.0527 30.3002 65.4974 27.9029 64.387 26.5401C63.327 25.1774 61.5857 24.4961 59.1629 24.4961C57.5477 24.4961 56.2101 24.7989 55.1502 25.4046C54.0902 26.0102 53.2826 26.9944 52.7274 28.3571C52.1721 29.7198 51.8946 31.5115 51.8946 33.7323ZM84.6352 55.7628V2.23837H94.7048V55.7628H84.6352ZM114.767 56.5956C110.83 56.5956 107.852 55.6114 105.833 53.6431C103.864 51.6242 102.88 48.596 102.88 44.5583C102.88 41.7319 103.385 39.5364 104.394 37.9718C105.404 36.3568 106.893 35.1959 108.861 34.4893C110.88 33.7323 113.328 33.278 116.205 33.1266L125.442 32.2938V30.0226C125.442 28.2057 124.988 26.9439 124.079 26.2373C123.171 25.4803 121.833 25.1017 120.067 25.1017C118.653 25.1017 117.013 25.1522 115.145 25.2531C113.328 25.3541 111.511 25.4802 109.694 25.6317C107.928 25.7831 106.388 25.9345 105.076 26.0859L104.773 18.9695C106.085 18.6667 107.65 18.3638 109.467 18.061C111.335 17.7077 113.278 17.4301 115.297 17.2283C117.316 17.0264 119.183 16.9254 120.9 16.9254C124.13 16.9254 126.83 17.3292 129.001 18.1367C131.171 18.9443 132.812 20.2817 133.922 22.1492C135.032 23.9661 135.588 26.4392 135.588 29.5684V46.9052C135.689 47.6118 136.067 48.167 136.723 48.5707C137.379 48.924 138.137 49.1764 138.995 49.3278L138.767 56.2928C137.96 56.2928 137.152 56.2928 136.345 56.2928C135.588 56.3433 134.856 56.3433 134.149 56.2928C133.442 56.2928 132.812 56.2423 132.256 56.1414C131.095 55.99 130.086 55.6871 129.228 55.2329C128.42 54.7787 127.764 54.2992 127.259 53.7945C126.452 54.1478 125.367 54.5515 124.004 55.0058C122.641 55.46 121.152 55.8386 119.537 56.1414C117.972 56.4442 116.382 56.5956 114.767 56.5956ZM117.19 49.1007C118.149 49.1007 119.158 48.9997 120.218 48.7978C121.278 48.596 122.262 48.3688 123.171 48.1165C124.13 47.8137 124.887 47.5361 125.442 47.2837V38.5775L117.72 39.2588C116.054 39.4102 114.843 39.9149 114.085 40.773C113.379 41.5805 113.025 42.7413 113.025 44.2555C113.025 45.7696 113.354 46.9557 114.01 47.8137C114.716 48.6717 115.776 49.1007 117.19 49.1007ZM179.138 56.5956C177.876 56.5956 176.336 56.5452 174.519 56.4442C172.702 56.3433 170.835 56.1919 168.917 55.99C167.049 55.7881 165.383 55.6114 163.92 55.46V2.23837H174.065V18.9695C174.822 18.6667 175.756 18.3638 176.866 18.061C177.977 17.7582 179.138 17.5058 180.349 17.304C181.611 17.0516 182.772 16.9254 183.832 16.9254C187.365 16.9254 190.166 17.6573 192.236 19.1209C194.356 20.5341 195.87 22.6539 196.779 25.4803C197.687 28.3066 198.141 31.8648 198.141 36.1549C198.141 41.202 197.561 45.2396 196.4 48.2679C195.289 51.2457 193.346 53.3907 190.57 54.703C187.794 55.9647 183.983 56.5956 179.138 56.5956ZM179.213 48.1165C181.687 48.1165 183.529 47.6875 184.74 46.8295C185.952 45.921 186.759 44.5835 187.163 42.817C187.617 41.0506 187.844 38.8803 187.844 36.3063C187.844 33.6818 187.643 31.5872 187.239 30.0226C186.835 28.4076 186.154 27.2467 185.195 26.5401C184.286 25.7831 182.999 25.4046 181.333 25.4046C180.526 25.4046 179.668 25.5055 178.759 25.7074C177.851 25.8588 176.967 26.0607 176.109 26.313C175.302 26.5149 174.62 26.7168 174.065 26.9187V47.8137C174.822 47.8641 175.705 47.9398 176.715 48.0408C177.724 48.0913 178.557 48.1165 179.213 48.1165ZM221.988 56.5956C217.799 56.5956 214.468 55.889 211.994 54.4758C209.572 53.0626 207.83 50.9176 206.77 48.0408C205.71 45.1639 205.18 41.5553 205.18 37.2148C205.18 32.521 205.836 28.6852 207.149 25.7074C208.512 22.7296 210.48 20.5341 213.054 19.1209C215.629 17.6573 218.808 16.9254 222.594 16.9254C228.197 16.9254 232.411 18.3386 235.238 21.165C238.115 23.9914 239.553 28.458 239.553 34.565L239.099 40.1673H215.326C215.376 42.9937 215.957 45.1135 217.067 46.5267C218.178 47.9399 220.095 48.6464 222.821 48.6464C224.386 48.6464 226.102 48.6212 227.97 48.5707C229.837 48.4698 231.679 48.3688 233.497 48.2679C235.364 48.167 236.954 48.066 238.266 47.9651L238.493 55.0058C237.232 55.2077 235.642 55.4348 233.724 55.6871C231.806 55.9395 229.812 56.1414 227.742 56.2928C225.723 56.4947 223.805 56.5956 221.988 56.5956ZM215.326 33.7323H229.484C229.484 30.3002 228.929 27.9029 227.818 26.5401C226.758 25.1774 225.017 24.4961 222.594 24.4961C220.979 24.4961 219.641 24.7989 218.581 25.4046C217.521 26.0102 216.714 26.9944 216.158 28.3571C215.603 29.7198 215.326 31.5115 215.326 33.7323ZM248.066 55.7628V2.23837H258.136V55.7628H248.066ZM268.279 55.7628V17.7582H278.349V55.7628H268.279Z"
                  fill="#FDFDFD"
                />
                <path
                  d="M266.525 7.8072L268.279 11.7023L284.192 5.91013V3.00143L283.046 0.345703L266.525 7.8072Z"
                  fill="#FDFDFD"
                />
              </svg>
            </div>
            <div className="flex-col mx-auto flex gap-3">
              <Link
                href={"/authentikasi/registrasi"}
                className="w-[312px] h-[50px]  flex justify-center items-center rounded-lg border-2 text-center border-white font-nunito"
              >
                <p className="text-white">Buat akun baru</p>
              </Link>

              <Link
                href={"/authentikasi/login"}
                className="w-[312px] text-center h-[50px] flex justify-center items-center rounded-lg text-white border-2 border-[#fff]"
              >
                Login
              </Link>

              <h1 className="font-nunito font-extralight text-center text-white">
                Atau
              </h1>
              <h1 className="font-nunito font-extralight text-center text-white">
                Masuk
              </h1>

              <div className="mx-auto gap-[20px] flex">
                <Link
                  href={`${process.env.NEXT_PUBLIC_BASE_API_URL_2}/oauth-google`}
                  className="w-[44px] h-[44px] rounded-full bg-[#dfdfdf] flex justify-center items-center"
                >
                  <img src="/icon/wrapper.png" />
                </Link>
                <Link
                  href={"/authentikasi/login"}
                  className="w-[44px] h-[44px] rounded-full bg-[#dfdfdf] flex justify-center items-center"
                >
                  <img src="/icon/mobile.png" />
                </Link>
              </div>
            </div>
          </div>
          <Image
            className="absolute top-0 left-0 z-10"
            src={"/icon/Star 18.png"}
            height={150}
            width={120}
          />
          <Image
            className="absolute top-40 right-0 z-10"
            src={"/icon/Star 14.png"}
            height={150}
            width={120}
          />

          <Image
            className="absolute bottom-0 left-0 z-10"
            src={"/icon/Star 15.png"}
            height={150}
            width={120}
          />
        </div>
      </LayoutUtama>
    </>
  );
};

export default Home;
