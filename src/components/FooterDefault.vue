<template>
  <div className='bg-[#F9FAFB]'>
      <div className='max-w-[1128px] mx-auto px-4 768:px-[30px] 1440:px-0'>
        <div className='py-12 flex flex-col 1024:flex-row 1440:py-16  justify-between  border-b border-b-body-text/[0.1] '>
          <div>
            <h5 className='font-bold dark:text-[#000000DE] text-[20px] leading-[24px] mb-[16px] 1440:mb-[6px]'>
              Join our newsletter
            </h5>
            <div className='text-body-text2 text-body-text font-normal font-OpenSans leading-body-text2'>
              No spam. Just get the latest updates delivered to your inbox.
            </div>
          </div>
          <div className='mt-[32px]   1024:mt-0 font-OpenSans'>
            <form
              onSubmit={handleSubmit}
              className='flex flex-col 1440:flex-row'
            >
              <div className='w-full 1024:w-[320px]'>
                <TextField
                  id='outlined-basic'
                  label={
                    Enter your email
                  }
                  variant='outlined'
                  size='small'
                  value={email}
                  
                />
              </div>
              <button
                type='submit'
                className=' w-full ml-0 mt-4 1440:mt-0 1440:ml-4  1440:w-[120px] relative group overflow-hidden h-10 cursor-pointer text-secondary hover:bg-[#0B1992] active:bg-primary-1 text-body-text1 font-OpenSans font-semibold bg-primary-1 flex items-center justify-center rounded '
                
              >
                Subscribe
                <span className='absolute w-0 h-0 transition-all duration-500 ease-in-out bg-secondary rounded-full group-active:w-40 group-active:h-40 opacity-10'></span>
              </button>
            </form>
          </div>
        </div>
        <div className='grid grid-cols-1  600:grid-cols-2 1024:grid-cols-3   1440:pl-0 1440:grid-cols-6  1440:gap-x-6 mt-12 1440:mt-[70px]'>
          <div>
            <div className='text-title-text text-body-text1 font-OpenSans font-semibold leading-[22px] mb-[14px]'>
              For Agencies
            </div>
            <div>
              <ul>
                <li className='footer-link text-body-text2 text-body-text leading-body-text2 font-normal font-OpenSans'>
                  <Link
                    href='/jobs'
                    className='text-body-text2 text-body-text leading-body-text2 font-normal font-OpenSans '
                  >
                    On-demand Remote Jobs
                  </Link>
                </li>
                <li className='footer-link text-body-text2 text-body-text leading-body-text2 font-normal font-OpenSans'>
                  <Link
                    href='/collaboration'
                    className='text-body-text2 text-body-text leading-body-text2 font-normal font-OpenSans'
                  >
                    Collaboration Process
                  </Link>
                </li>
                <li className='footer-link text-body-text2 text-body-text leading-body-text2 font-normal font-OpenSans'>
                  <Link
                    href='/get-listed'
                    className='text-body-text2 text-body-text leading-body-text2 font-normal font-OpenSans'
                  >
                    Get Listed
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div className='text-title-text text-body-text1 font-OpenSans font-semibold leading-[22px] mb-[14px] mt-8 600:mt-0'>
              <Link href='/developer/for-developers'>For Developers</Link>
            </div>
            <div>
              <ul>
                <li className='footer-link text-body-text2 text-body-text leading-body-text2 font-normal font-OpenSans'>
                  <Link
                    href='/jobs'
                    className='text-body-text2 text-body-text leading-body-text2 font-normal font-OpenSans '
                  >
                    On-demand Remote Jobs
                  </Link>
                </li>
                <li className='footer-link text-body-text2 text-body-text leading-body-text2 font-normal font-OpenSans'>
                  <Link
                    href='/resume-guide'
                    className='text-body-text2 text-body-text leading-body-text2 font-normal font-OpenSans'
                  >
                    Resume Guides
                  </Link>
                </li>
                <li className='footer-link text-body-text2 text-body-text leading-body-text2 font-normal font-OpenSans'>
                  <Link
                    href='/remote-developer-jobs'
                    className='text-body-text2 text-body-text leading-body-text2 font-normal font-OpenSans'
                  >
                    Apply for Top Jobs
                  </Link>
                </li>
                <li className='footer-link text-body-text2 text-body-text leading-body-text2 font-normal font-OpenSans'>
                  <Link
                    href='/developer-knowledge-hub'
                    className='text-body-text2 text-body-text leading-body-text2 font-normal font-OpenSans'
                  >
                    Developer Knowledge Hub
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div className='text-title-text text-body-text1 font-OpenSans font-semibold leading-[22px]  mb-[14px] mt-8 1024:mt-0 1440:mt-0'>
              <Link href='/company/for-companies'>For Firms</Link>
            </div>
            <div>
              <ul>
                <li className='footer-link text-body-text2 text-body-text leading-body-text2 font-normal font-OpenSans'>
                  <Link
                    href='/hire-developer'
                    className='text-body-text2 text-body-text leading-body-text2 font-normal font-OpenSans '
                  >
                    Hire Verified Developers
                  </Link>
                </li>
                <li className='footer-link text-body-text2 text-body-text leading-body-text2 font-normal font-OpenSans'>
                  <Link
                    href='job-description-template'
                    className='text-body-text2 text-body-text leading-body-text2 font-normal font-OpenSans'
                  >
                    Job Description Template
                  </Link>
                </li>
                 <!-- <li className='footer-link text-body-text2 text-body-text leading-body-text2 font-normal font-OpenSans'>
                  <Link
                    href='/hiring-resources'
                    className='text-body-text2 text-body-text leading-body-text2 font-normal font-OpenSans'
                  >
                    Recruitment Resources
                  </Link>
                </li>  -->
                <li className='footer-link text-body-text2 text-body-text leading-body-text2 font-normal font-OpenSans'>
                  <Link
                    href='/how-to-hire'
                    className='text-body-text2 text-body-text leading-body-text2 font-normal font-OpenSans'
                  >
                    Hiring Process
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className=' 768:mt-0 '>
            <div className='text-title-text text-body-text1 font-OpenSans font-semibold leading-[22px]  mb-[14px] mt-8  1440:mt-0'>
              About Us
            </div>
            <div>
              <ul>
                {/* <li className='footer-link text-body-text2 text-body-text leading-body-text2 font-normal font-OpenSans'>
                  <Link
                    href='#'
                    className='text-body-text2 text-body-text leading-body-text2 font-normal font-OpenSans '
                  >
                    Blogs
                  </Link>
                </li>
                <li className='footer-link text-body-text2 text-body-text leading-body-text2 font-normal font-OpenSans'>
                  <Link
                    href='#'
                    className='text-body-text2 text-body-text leading-body-text2 font-normal font-OpenSans'
                  >
                    Help center
                  </Link>
                </li> */}
                <li className='footer-link text-body-text2 text-body-text leading-body-text2 font-normal font-OpenSans'>
                  <Link
                    href='/contact-us'
                    className='text-body-text2 text-body-text leading-body-text2 font-normal font-OpenSans'
                  >
                    Contact Us
                  </Link>
                </li>
                <li className='footer-link text-body-text2 text-body-text leading-body-text2 font-normal font-OpenSans'>
                  <Link
                    href='/blog'
                    className='text-body-text2 text-body-text leading-body-text2 font-normal font-OpenSans'
                  >
                    Blog
                  </Link>
                </li>
                <li className='footer-link text-body-text2 text-body-text leading-body-text2 font-normal font-OpenSans'>
                  <Link
                    href='/help-center'
                    className='text-body-text2 text-body-text leading-body-text2 font-normal font-OpenSans'
                  >
                    Help Center
                  </Link>
                </li>
                <li className='footer-link text-body-text2 text-body-text leading-body-text2 font-normal font-OpenSans'>
                  <Link
                    href='/about-us'
                    className='text-body-text2 text-body-text leading-body-text2 font-normal font-OpenSans'
                  >
                    About Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className=' 1440:mt-0'>
            <div className='text-title-text text-body-text1 font-OpenSans font-semibold leading-[22px] mb-[14px] mt-8 1440:mt-0'>
              Social
            </div>
            <div>
              <ul>
                <li className='footer-link text-body-text2 text-body-text leading-body-text2 font-normal font-OpenSans'>
                  <a
                    href='https://twitter.com/HigateIo'
                    className='text-body-text2 text-body-text leading-body-text2 font-normal font-OpenSans '
                    target='_blank'
                  >
                    Twitter
                  </a>
                </li>
                <li className='footer-link text-body-text2 text-body-text leading-body-text2 font-normal font-OpenSans'>
                  <a
                    href='https://www.linkedin.com/company/hi-gate/'
                    className='text-body-text2 text-body-text leading-body-text2 font-normal font-OpenSans'
                    target='_blank'
                  >
                    LinkedIn
                  </a>
                </li>
                <li className='footer-link text-body-text2 text-body-text leading-body-text2 font-normal font-OpenSans'>
                  <a
                    href='https://www.facebook.com/higate.io'
                    className='text-body-text2 text-body-text leading-body-text2 font-normal font-OpenSans'
                    target='_blank'
                  >
                    Facebook
                  </a>
                </li>
                <li className='footer-link text-body-text2 text-body-text leading-body-text2 font-normal font-OpenSans'>
                  <a
                    href='https://www.youtube.com/channel/UCBhepqK2dO-3TBWBNbU1ZjQ'
                    className='text-body-text2 text-body-text leading-body-text2 font-normal font-OpenSans'
                    target='_blank'
                  >
                    Youtube
                  </a>
                </li>
                <li className='footer-link text-body-text2 text-body-text leading-body-text2 font-normal font-OpenSans'>
                  <a
                    href='https://discord.gg/YhE2nNpQTP'
                    className='text-body-text2 text-body-text leading-body-text2 font-normal font-OpenSans'
                    target='_blank'
                  >
                    Discord
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className=' 1440:mt-0'>
            <div className='text-title-text text-body-text1 font-OpenSans font-semibold leading-[22px] mb-[14px] mt-8 1440:mt-0'>
              Legal
            </div>
            <div>
              <ul>
                <li className='footer-link text-body-text2 text-body-text leading-body-text2 font-normal font-OpenSans'>
                  <Link
                    href='/terms-of-service'
                    className='text-body-text2 text-body-text leading-body-text2 font-normal font-OpenSans '
                  >
                    Terms
                  </Link>
                </li>
                <li className='footer-link text-body-text2 text-body-text leading-body-text2 font-normal font-OpenSans'>
                  <Link
                    href='privacy-policy'
                    className='text-body-text2 text-body-text leading-body-text2 font-normal font-OpenSans'
                  >
                    Privacy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className=' mt-[42px] 1440:mt-[68px] pb-12 '>
          <hr className='border-body-text/[0.1]' />
          <div className='flex flex-col items-start 768:flex-row justify-between mt-12 1440:mt-8'>
            <Link href='/'>
              <div>
                <Image
                  src='/static/images/logo/Logo-light.png'
                  width={140}
                  height={34}
                  className='bg-[#F9FAFB] cursor-pointer'
                ></Image>
              </div>
            </Link>
            <div className='text-body-text2 text-[#00000061] leading-body-text2 font-OpenSans mt-4 1440:mt-2 1920:mt-0'>
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