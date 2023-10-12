import Link from "next/link";

const NavItem = ({
  text,
  externalRoot,
  dd,
  mainButton,
  rootButton,
  rootHref,
  ddItem1,
  ddItem2,
  ddItem3,
  ddItem4,
  ddItem5,
  ddItem6,
  ddItem7,
  ddItem8,
  ddHref1,
  ddHref2,
  ddHref3,
  ddHref4,
  ddHref5,
  ddHref6,
  ddHref7,
  ddHref8,
  text1,
  text2,
  text3,
  text4,
  text5,
  text6,
  text7,
  text8,
}) => {
  const defaultContent = "";

  return (
    <div>
      <div class="dropdown">
        <div class={mainButton}>
          <button class="nav__link dropbtn">{text}</button>
        </div>

        <div class={rootButton}>
          <Link href={rootHref}>
            <p class="nav__link">{text}</p>
          </Link>
        </div>

        <div class={externalRoot}>
          <button class="nav__link dropbtn">
            <a class="nav__link dropbtn" href={rootHref}>
              {text}
            </a>
          </button>
        </div>
        {/* ------------------------dropdown items---------------------- */}
        <div class={dd}>
          <div class={ddItem1}>
            <Link href={ddHref1}>
              <p class="ddItem">{text1}</p>
            </Link>
          </div>

          <div class={ddItem2}>
            <Link href={ddHref2}>
              <p class="ddItem">{text2}</p>
            </Link>
          </div>

          <div class={ddItem3}>
            <Link href={ddHref3}>
              <p class="ddItem">{text3}</p>
            </Link>
          </div>

          <div class={ddItem4}>
            <Link href={ddHref4}>
              <p class="ddItem">{text4}</p>
            </Link>
          </div>

          <div class={ddItem5}>
            <Link href={ddHref5}>
              <p class="ddItem">{text5}</p>
            </Link>
          </div>

          <div class={ddItem6}>
            <Link href={ddHref6}>
              <p class="ddItem">{text6}</p>
            </Link>
          </div>

          <div class={ddItem7}>
            <Link href={ddHref7}>
              <p class="ddItem">{text7}</p>
            </Link>
          </div>

          <div class={ddItem8}>
            <Link href={ddHref8}>
              <p class="ddItem">{text8}</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavItem;
