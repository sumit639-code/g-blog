import Sidebar from "@/components/sidebar";

export default function MainpageLayout({
  children, // will be a page or nested layout
}) {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <div className="mainpage">
        <Sidebar />

        <span className="child">
        {children}
        </span>
      </div>
    </section>
  );
}
