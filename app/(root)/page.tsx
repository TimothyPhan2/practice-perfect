import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full dark-gradient py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30" style={{backgroundImage: 'var(--bg-pattern)'}}></div>
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6 md:px-12 gap-12 relative z-10">
          <div className="flex flex-col gap-8 max-w-lg">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary-100 to-primary-200 text-transparent bg-clip-text leading-tight mb-6">Master Your Interview Skills with AI</h1>
              <p className="text-xl">
                Practice Perfect helps you prepare for job interviews with AI-powered practice sessions and real-time feedback.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-primary text-base" asChild>
                <Link href="/sign-up">Get Started</Link>
              </Button>
              <Button className="btn-secondary text-base" asChild>
                <Link href="/features">Learn More</Link>
              </Button>
            </div>
          </div>
          <div className="card-border relative max-sm:hidden">
            <div className="dark-gradient p-6 rounded-2xl ">
              <Image
                src="/robot.png"
                alt="Interview Practice"
                width={520}
                height={520}
                className="rounded-xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary-100 to-primary-200 text-transparent bg-clip-text inline-block">Why Choose Practice Perfect?</h2>
            <p className="text-xl max-w-2xl mx-auto">
              Our platform offers everything you need to ace your next interview
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-border">
              <div className="dark-gradient p-8 rounded-2xl flex flex-col items-center text-center h-full">
                <div className="w-20 h-20 bg-primary-200/20 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-200">
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <line x1="10" y1="9" x2="8" y2="9"></line>
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-primary-100">Real Interview Questions</h3>
                <p className="">
                  Practice with real questions from top companies across various industries
                </p>
              </div>
            </div>

            <div className="card-border">
              <div className="dark-gradient p-8 rounded-2xl flex flex-col items-center text-center h-full">
                <div className="w-20 h-20 bg-primary-200/20 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-200">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                    <line x1="12" y1="17" x2="12.01" y2="17"></line>
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-primary-100">AI-Powered Feedback</h3>
                <p className="">
                  Get instant, personalized feedback on your responses to improve faster
                </p>
              </div>
            </div>

            <div className="card-border">
              <div className="dark-gradient p-8 rounded-2xl flex flex-col items-center text-center h-full">
                <div className="w-20 h-20 bg-primary-200/20 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-200">
                    <path d="M12 20h9"></path>
                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-primary-100">Practice Anywhere</h3>
                <p className="">
                  Access your practice sessions on any device, whenever you need
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 px-6 dark-gradient relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{backgroundImage: 'var(--bg-pattern)'}}></div>
        <div className="container mx-auto max-w-3xl relative z-10 text-center">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary-100 to-primary-200 text-transparent bg-clip-text inline-block">Ready to Ace Your Next Interview?</h2>
          <p className="text-xl mb-10">
            Join thousands of job seekers who have improved their interview skills with Practice Perfect
          </p>
          <Button className="btn-primary text-base px-8 py-6" asChild>
            <Link href="/sign-up">Get Started Free</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
