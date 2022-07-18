import classNames from "classnames";
import s from "./Footer.module.scss";

export function LikeButton({ isActive }: { isActive: boolean }) {
  console.log(isActive);
  return (
    <svg
      width="31"
      height="31"
      viewBox="0 0 31 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={classNames(
        isActive
          ? [s.footer_button_active, s.footer_button_filled]
          : [s.footer_button_inactive, s.footer_button_unfilled]
      )}
    >
      <path
        id="like"
        d="M25.9572 6.92462C24.6322 5.59613 22.8757 4.7853 21.0051 4.63858C19.1345 4.49187 17.2732 5.01895 15.7572 6.12462C14.1668 4.94167 12.1872 4.40526 10.2171 4.62342C8.24702 4.84158 6.43276 5.79809 5.13968 7.30035C3.84659 8.80261 3.17074 10.739 3.24821 12.7196C3.32569 14.7003 4.15073 16.578 5.55721 17.9746L13.3197 25.7496C13.9697 26.3893 14.8452 26.7479 15.7572 26.7479C16.6692 26.7479 17.5447 26.3893 18.1947 25.7496L25.9572 17.9746C27.4167 16.5062 28.2359 14.52 28.2359 12.4496C28.2359 10.3793 27.4167 8.39304 25.9572 6.92462ZM24.1947 16.2496L16.4322 24.0121C16.3439 24.1013 16.2387 24.1721 16.1229 24.2204C16.007 24.2688 15.8827 24.2936 15.7572 24.2936C15.6317 24.2936 15.5074 24.2688 15.3915 24.2204C15.2757 24.1721 15.1705 24.1013 15.0822 24.0121L7.31971 16.2121C6.33941 15.2101 5.79047 13.864 5.79047 12.4621C5.79047 11.0603 6.33941 9.71419 7.31971 8.71212C8.31866 7.72586 9.66593 7.17283 11.0697 7.17283C12.4735 7.17283 13.8208 7.72586 14.8197 8.71212C14.9359 8.82928 15.0742 8.92228 15.2265 8.98574C15.3788 9.0492 15.5422 9.08187 15.7072 9.08187C15.8722 9.08187 16.0356 9.0492 16.1879 8.98574C16.3403 8.92228 16.4785 8.82928 16.5947 8.71212C17.5937 7.72586 18.9409 7.17283 20.3447 7.17283C21.7485 7.17283 23.0958 7.72586 24.0947 8.71212C25.0885 9.70106 25.6554 11.0399 25.6741 12.4417C25.6928 13.8436 25.1618 15.197 24.1947 16.2121V16.2496Z"
        fill="#323232"
        fillOpacity="0.6"
      />
    </svg>
  );
}

export function CommentButton({ isActive }: { isActive: boolean }) {
  return (
    <svg
      width="26"
      height="27"
      viewBox="0 0 26 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={classNames(
        isActive
          ? [s.footer_button_active, s.footer_button_filled]
          : [s.footer_button_inactive, s.footer_button_unfilled]
      )}
    >
      <path
        d="M5.92765 2.84129H20.511C21.3398 2.84129 22.1346 3.1837 22.7207 3.79319C23.3067 4.40269 23.636 5.22934 23.636 6.09129V16.9246C23.636 17.7866 23.3067 18.6132 22.7207 19.2227C22.1346 19.8322 21.3398 20.1746 20.511 20.1746H8.43807L4.5839 24.1938C4.48657 24.2942 4.37113 24.3736 4.24422 24.4275C4.11731 24.4815 3.98141 24.5088 3.84432 24.508C3.70768 24.5116 3.57211 24.4819 3.44849 24.4213C3.25826 24.34 3.09542 24.202 2.98049 24.0246C2.86556 23.8473 2.80368 23.6385 2.80265 23.4246V6.09129C2.80265 5.22934 3.13189 4.40269 3.71794 3.79319C4.30399 3.1837 5.09885 2.84129 5.92765 2.84129ZM4.88598 20.8138L7.2714 18.3221C7.36874 18.2217 7.48417 18.1423 7.61108 18.0884C7.738 18.0345 7.8739 18.0071 8.01099 18.008H20.511C20.7873 18.008 21.0522 17.8938 21.2476 17.6907C21.4429 17.4875 21.5527 17.2119 21.5527 16.9246V6.09129C21.5527 5.80397 21.4429 5.52842 21.2476 5.32526C21.0522 5.12209 20.7873 5.00796 20.511 5.00796H13.2193H5.92765C5.65139 5.00796 5.38643 5.12209 5.19108 5.32526C4.99573 5.52842 4.88598 5.80397 4.88598 6.09129V20.8138Z"
        fill="#323232"
        fillOpacity="0.6"
      />
    </svg>
  );
}
export function PinButton({ isActive }: { isActive: boolean }) {
  return (
    <svg
      className={classNames(
        isActive
          ? [s.footer_button_active, s.footer_button_filled]
          : [s.footer_button_inactive, s.footer_button_unfilled]
      )}
      width="28"
      height="29"
      viewBox="0 0 28 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.6671 3.00795H9.33377C8.40551 3.00795 7.51527 3.3767 6.85889 4.03308C6.20251 4.68946 5.83376 5.5797 5.83376 6.50795V25.1746C5.83295 25.3802 5.88647 25.5823 5.98891 25.7606C6.09134 25.9388 6.23906 26.0868 6.4171 26.1896C6.59445 26.292 6.79564 26.3459 7.00043 26.3459C7.20522 26.3459 7.40641 26.292 7.58376 26.1896L14.0004 22.4796L20.4171 26.1896C20.5949 26.2904 20.7961 26.3427 21.0004 26.3413C21.2048 26.3427 21.406 26.2904 21.5838 26.1896C21.7618 26.0868 21.9095 25.9388 22.012 25.7606C22.1144 25.5823 22.1679 25.3802 22.1671 25.1746V6.50795C22.1671 5.5797 21.7984 4.68946 21.142 4.03308C20.4856 3.3767 19.5954 3.00795 18.6671 3.00795ZM19.8338 23.1563L14.5838 20.123C14.4064 20.0206 14.2052 19.9667 14.0004 19.9667C13.7956 19.9667 13.5945 20.0206 13.4171 20.123L8.1671 23.1563V6.50795C8.1671 6.19853 8.29001 5.90179 8.50881 5.683C8.7276 5.4642 9.02435 5.34129 9.33377 5.34129H18.6671C18.9765 5.34129 19.2733 5.4642 19.4921 5.683C19.7108 5.90179 19.8338 6.19853 19.8338 6.50795V23.1563Z"
        fill="#323232"
        fillOpacity="0.6"
      />
    </svg>
  );
}
