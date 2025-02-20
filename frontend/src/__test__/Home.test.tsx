import { render, screen } from "@testing-library/react";
import Home from "../app/page";

describe("Home Component", () => {
  it("should render welcome message", () => {
    render(<Home />);
    const welcomeMessage = screen.getByText(/Welcome to Tasks Manager App/i);
    expect(welcomeMessage).toBeInTheDocument();
  });
  it("should render the banner image", () => {
    render(<Home />);
    const bannerImage = screen.getByRole("img", { name: /Home/i });
    expect(bannerImage).toHaveAttribute(
      "src",
      expect.stringContaining("/_next/image?url=%2Fbanner.webp")
    );
  });
});
