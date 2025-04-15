export default function Footer() {
    return (
      <footer className="bg-gray-100 mt-8">
        <div className="container mx-auto px-4 py-6 text-sm text-gray-500 flex flex-col sm:flex-row sm:justify-between items-center">
          <p className="mb-2 sm:mb-0">&copy; {new Date().getFullYear()} - فروشگاه ما</p>
          <p>
            طراحی و توسعه توسط{" "}
            <a
              href="https://example.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              شما
            </a>
          </p>
        </div>
      </footer>
    );
  }
  