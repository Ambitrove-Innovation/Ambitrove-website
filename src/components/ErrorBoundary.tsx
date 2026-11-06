import { Component, type ErrorInfo, type ReactNode } from "react";
import { AlertTriangle, RefreshCw, Home } from "lucide-react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught application error:", error, errorInfo);
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: undefined });
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      return (
        <section className="min-h-[70vh] flex items-center justify-center px-6 py-16">
          <div className="max-w-md w-full bg-neutral-900 border border-neutral-800 rounded-2xl p-8 text-center shadow-2xl">
            <div className="w-14 h-14 bg-red-500/10 border border-red-500/20 text-red-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <AlertTriangle className="w-7 h-7" />
            </div>

            <h2 className="text-2xl font-bold text-white mb-2 tracking-tight">
              Something went wrong
            </h2>

            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              We encountered an unexpected error while loading this page. This could be due to a temporary network hiccup or an updated version being deployed.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={this.handleReset}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-500 text-white text-sm font-semibold transition-colors shadow-lg shadow-teal-900/30">
                <RefreshCw className="w-4 h-4" />
                Reload Page
              </button>

              <a
                href="/"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-gray-200 text-sm font-medium border border-neutral-700 transition-colors">
                <Home className="w-4 h-4" />
                Go to Home
              </a>
            </div>

            <p className="text-xs text-gray-500 mt-6">
              If this issue persists, please contact us at{" "}
              <a href="mailto:contact@ambitrove.com" className="text-teal-400 hover:underline">
                contact@ambitrove.com
              </a>
            </p>
          </div>
        </section>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
