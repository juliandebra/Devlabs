import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Login from "../app/components/Login";
import { useRouter } from "next/navigation";
import { useAuth } from "@/Context/AuthContext";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

jest.mock("@/Context/AuthContext", () => ({
  useAuth: jest.fn(),
}));
jest.mock("@/services/authService", () => ({
  login: jest.fn(),
}));
describe("Login Component", () => {
  const mockPush = jest.fn();
  const mockSetIsAuthenticated = jest.fn();

  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      push: mockPush,
    });
    (useAuth as jest.Mock).mockReturnValue({
      setIsAuthenticated: mockSetIsAuthenticated,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render the login form", () => {
    render(<Login />);
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /login/i })).toBeInTheDocument();
  });

  it("should show error message when form is submitted with empty fields", async () => {
    render(<Login />);
    fireEvent.click(screen.getByRole("button", { name: /login/i }));
    expect(
      await screen.findByText(/please fill in all fields/i)
    ).toBeInTheDocument();
  });

  it("should show error message when email is invalid", async () => {
    render(<Login />);
    fireEvent.change(screen.getByLabelText(/email:/i), {
      target: { value: "invalid-email" },
    });
    fireEvent.change(screen.getByLabelText(/password:/i), {
      target: { value: "password123" },
    });
    fireEvent.click(screen.getByRole("button", { name: /login/i }));
    expect(
      await screen.findByText(/invalid email address/i)
    ).toBeInTheDocument();
  });

  it("should call login function and redirect on successful login", async () => {
    const { login } = require("@/services/authService");
    login.mockResolvedValue({ token: "fake-token" });

    render(<Login />);
    fireEvent.change(screen.getByLabelText(/email:/i), {
      target: { value: "test@example.com" },
    });
    fireEvent.change(screen.getByLabelText(/password:/i), {
      target: { value: "password123" },
    });
    fireEvent.click(screen.getByRole("button", { name: /login/i }));

    await waitFor(() => expect(mockPush).toHaveBeenCalledWith("/tasks"));
    expect(mockSetIsAuthenticated).toHaveBeenCalledWith(true);
  });
});
