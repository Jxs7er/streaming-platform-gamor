const Footer = () => {
  return (
    <div className=" bottom-0 w-full bg-[linear-gradient(123deg,_#fff_70%,_#FAFAFA_30%)] 
    text-gray-800/90 opacity-90  py-8">
      {/* CONTENT */}
      <div className="relative z-10 flex justify-around items-center text-xs gap-2">
        <div>
          <h4 className="text-sm font-medium">Company</h4>
          <ul>
            <li>About us</li>
            <li>Careers</li>
            <li>Press</li>
            <li>Blog</li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-medium">Resources</h4>
          <ul>
            <li>Help Center</li>
            <li>Documentation</li>
            <li>API</li>
            <li>Community</li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-medium">Legal</h4>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Cookie Policy</li>
            <li>Security</li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-medium">Social</h4>
          <ul>
            <li>Twitter</li>
            <li>LinkedIn</li>
            <li>GitHub</li>
            <li>Discord</li>
          </ul>
        </div>
      </div>

      <div className="relative z-10 flex justify-center w-full my-4 text-xs">
        <span>© 2026 Stream Platform. All rights reserved.</span>
      </div>

      <div className="relative z-10 flex justify-center w-full font-medium mt-2">
        <span>
          Built by Jxs7er.
        </span>
      </div>
    </div>
  );
};

export default Footer;
