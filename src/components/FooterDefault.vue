<template>
  <div className="bg-[#F9FAFB]">
    <div className="max-w-[1128px] mx-auto px-4 768:px-[30px] 1440:px-0">
      <div
        className="py-12 flex flex-col 1024:flex-row 1440:py-16  justify-between  border-b border-b-body-text/[0.1] "
      >
        <div>
          <h5
            className="font-bold dark:text-[#000000DE] text-[20px] leading-[24px] mb-[16px] 1440:mb-[6px]"
          >
            Join our newsletter
          </h5>
          <div
            className="text-body-text2 text-body-text font-normal font-OpenSans leading-body-text2"
          >
            No spam. Just get the latest updates delivered to your inbox.
          </div>
        </div>
        <div className="mt-[32px]   1024:mt-0 font-OpenSans">
          <form
            onSubmit="{handleSubmit}"
            className="flex flex-col 1440:flex-row"
          >
            <div className="w-full 1024:w-[320px]"></div>
            <button
              type="submit"
              className=" w-full ml-0 mt-4 1440:mt-0 1440:ml-4  1440:w-[120px] relative group overflow-hidden h-10 cursor-pointer text-secondary hover:bg-[#0B1992] active:bg-primary-1 text-body-text1 font-OpenSans font-semibold bg-primary-1 flex items-center justify-center rounded "
            >
              Subscribe
              <span
                className="absolute w-0 h-0 transition-all duration-500 ease-in-out bg-secondary rounded-full group-active:w-40 group-active:h-40 opacity-10"
              ></span>
            </button>
          </form>
        </div>
      </div>
      <div
        class="grid grid-cols-1 600:grid-cols-2 1024:grid-cols-3 1440:pl-0 1440:grid-cols-6 1440:gap-x-6 mt-12 1440:mt-[70px]"
      >
        <div>
          <div
            class="text-title-text text-body-text1 font-OpenSans font-semibold leading-[22px] mb-[14px]"
          >
            For Agencies
          </div>
          <div>
            <ul>
              <li
                class="footer-link text-body-text2 text-body-text leading-body-text2 font-normal font-OpenSans"
              >
                <a href="/jobs">On-demand Remote Jobs</a>
              </li>
              <li
                class="footer-link text-body-text2 text-body-text leading-body-text2 font-normal font-OpenSans"
              >
                <a href="/collaboration">Collaboration Process</a>
              </li>
              <li
                class="footer-link text-body-text2 text-body-text leading-body-text2 font-normal font-OpenSans"
              >
                <a href="/get-listed">Get Listed</a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div
            class="text-title-text text-body-text1 font-OpenSans font-semibold leading-[22px] mb-[14px] mt-8 600:mt-0"
          >
            <a href="/developer/for-developers">For Developers</a>
          </div>
          <div>
            <ul>
              <li
                class="footer-link text-body-text2 text-body-text leading-body-text2 font-normal font-OpenSans"
              >
                <a href="/jobs">On-demand Remote Jobs</a>
              </li>
              <li
                class="footer-link text-body-text2 text-body-text leading-body-text2 font-normal font-OpenSans"
              >
                <a href="/resume-guide">Resume Guides</a>
              </li>
              <li
                class="footer-link text-body-text2 text-body-text leading-body-text2 font-normal font-OpenSans"
              >
                <a href="/remote-developer-jobs">Apply for Top Jobs</a>
              </li>
              <li
                class="footer-link text-body-text2 text-body-text leading-body-text2 font-normal font-OpenSans"
              >
                <a href="/developer-knowledge-hub">Developer Knowledge Hub</a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div
            class="text-title-text text-body-text1 font-OpenSans font-semibold leading-[22px] mb-[14px] mt-8 1024:mt-0 1440:mt-0"
          >
            <a href="/company/for-companies">For Firms</a>
          </div>
          <div>
            <ul>
              <li
                class="footer-link text-body-text2 text-body-text leading-body-text2 font-normal font-OpenSans"
              >
                <a href="/hire-developer">Hire Verified Developers</a>
              </li>
              <li
                class="footer-link text-body-text2 text-body-text leading-body-text2 font-normal font-OpenSans"
              >
                <a href="/job-description-template">Job Description Template</a>
              </li>
              <li
                class="footer-link text-body-text2 text-body-text leading-body-text2 font-normal font-OpenSans"
              >
                <a href="/how-to-hire">Hiring Process</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="768:mt-0">
          <div
            class="text-title-text text-body-text1 font-OpenSans font-semibold leading-[22px] mb-[14px] mt-8 1440:mt-0"
          >
            About Us
          </div>
          <div>
            <ul>
              <li
                class="footer-link text-body-text2 text-body-text leading-body-text2 font-normal font-OpenSans"
              >
                <a href="/contact-us">Contact Us</a>
              </li>
              <li
                class="footer-link text-body-text2 text-body-text leading-body-text2 font-normal font-OpenSans"
              >
                <a href="/blog">Blog</a>
              </li>
              <li
                class="footer-link text-body-text2 text-body-text leading-body-text2 font-normal font-OpenSans"
              >
                <a href="/help-center">Help Center</a>
              </li>
              <li
                class="footer-link text-body-text2 text-body-text leading-body-text2 font-normal font-OpenSans"
              >
                <a href="/about-us">About Us</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="1440:mt-0">
          <div
            class="text-title-text text-body-text1 font-OpenSans font-semibold leading-[22px] mb-[14px] mt-8 1440:mt-0"
          >
            Social
          </div>
          <div>
            <ul>
              <li
                class="footer-link text-body-text2 text-body-text leading-body-text2 font-normal font-OpenSans"
              >
                <a
                  href="https://twitter.com/HigateIo"
                  class="text-body-text2 text-body-text leading-body-text2 font-normal font-OpenSans"
                  target="_blank"
                  >Twitter</a
                >
              </li>
              <li
                class="footer-link text-body-text2 text-body-text leading-body-text2 font-normal font-OpenSans"
              >
                <a
                  href="https://www.linkedin.com/company/hi-gate/"
                  class="text-body-text2 text-body-text leading-body-text2 font-normal font-OpenSans"
                  target="_blank"
                  >LinkedIn</a
                >
              </li>
              <li
                class="footer-link text-body-text2 text-body-text leading-body-text2 font-normal font-OpenSans"
              >
                <a
                  href="https://www.facebook.com/higate.io"
                  class="text-body-text2 text-body-text leading-body-text2 font-normal font-OpenSans"
                  target="_blank"
                  >Facebook</a
                >
              </li>
              <li
                class="footer-link text-body-text2 text-body-text leading-body-text2 font-normal font-OpenSans"
              >
                <a
                  href="https://www.youtube.com/channel/UCBhepqK2dO-3TBWBNbU1ZjQ"
                  class="text-body-text2 text-body-text leading-body-text2 font-normal font-OpenSans"
                  target="_blank"
                  >Youtube</a
                >
              </li>
              <li
                class="footer-link text-body-text2 text-body-text leading-body-text2 font-normal font-OpenSans"
              >
                <a
                  href="https://discord.gg/YhE2nNpQTP"
                  class="text-body-text2 text-body-text leading-body-text2 font-normal font-OpenSans"
                  target="_blank"
                  >Discord</a
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="1440:mt-0">
          <div
            class="text-title-text text-body-text1 font-OpenSans font-semibold leading-[22px] mb-[14px] mt-8 1440:mt-0"
          >
            Legal
          </div>
          <div>
            <ul>
              <li
                class="footer-link text-body-text2 text-body-text leading-body-text2 font-normal font-OpenSans"
              >
                <a href="/terms-of-service">Terms</a>
              </li>
              <li
                class="footer-link text-body-text2 text-body-text leading-body-text2 font-normal font-OpenSans"
              >
                <a href="/privacy-policy">Privacy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className=" mt-[42px] 1440:mt-[68px] pb-12 ">
        <hr className="border-body-text/[0.1]" />
        <div
          className="flex flex-col items-start 768:flex-row justify-between mt-12 1440:mt-8"
        >
          <Link href="/">
            <div>
              <img
                src="/static/images/logo/Logo-light.png"
                width="{140}"
                height="{34}"
                className="bg-[#F9FAFB] cursor-pointer"
                />
            </div>
          </Link>
          <div
            className="text-body-text2 text-[#00000061] leading-body-text2 font-OpenSans mt-4 1440:mt-2 1920:mt-0"
          >
            © 2022 Higate. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterDefault",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
