import React from "react";
import { render, screen } from "@testing-library/react";
import LoginPage from "../app/login/page";
import { cookies } from "next/headers";
import { verifyToken } from "@/services/authService";
import { redirect, useRouter } from "next/navigation";

jest.mock("next/headers", () => ({
  cookies: jest.fn(),
}));

jest.mock("next/navigation", () => ({
  redirect: jest.fn(),
  useRouter: jest.fn(),
}));

jest.mock("@/services/authService", () => ({
  verifyToken: jest.fn(),
}));

describe("LoginPage", () => {
  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      push: jest.fn(),
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
  it("should redirect to /tasks if a valid token is present", async () => {
    (cookies as jest.Mock).mockReturnValue({
      get: jest.fn().mockReturnValue({ value: "valid-token" }),
    });
    (verifyToken as jest.Mock).mockResolvedValue(true);

    await LoginPage();

    expect(redirect).toHaveBeenCalledWith("/tasks");
  });

  it("should render the login form if no valid token is present", async () => {
    (cookies as jest.Mock).mockReturnValue({
      get: jest.fn().mockReturnValue(undefined),
    });

    render(await LoginPage());

    expect(screen.getByText(/login form/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /login/i })).toBeInTheDocument();
  });
});
