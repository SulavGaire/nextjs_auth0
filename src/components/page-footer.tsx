import React from "react";
import { Auth0Resource } from "@/models/auth0-resource";
import { PageFooterHyperlink } from "./page-footer-hyperlink";
import Image from "next/image";

export const PageFooter = () => {
  const resourceList: Auth0Resource[] = [
    {
      path: "https://auth0.com/why-auth0/",
      label: "Why Auth0",
    },
    {
      path: "https://auth0.com/docs/get-started",
      label: "How It Works",
    },
    {
      path: "https://auth0.com/blog/developers/",
      label: "Developer Blog",
    },
    {
      path: "https://auth0.com/contact-us",
      label: "Contact an Expert",
    },
  ];

  return (
    <footer className="page-footer">
      <div className="page-footer-grid">
        <div className="page-footer-grid__info">
          <div className="page-footer-info__message">
            <p className="page-footer-message__headline">
              <span>This sample application to implement auth0 by&nbsp;</span>
              <PageFooterHyperlink path="https://sulavgaire.com.np/">
                Sulav
              </PageFooterHyperlink>
            </p>
            <p className="page-footer-message__description">
              <PageFooterHyperlink path="https://auth0.com/docs/quickstarts/">
                <span>
                  Securely implement authentication using Auth0 on any stack and
                  any device&nbsp;
                </span>
                <u>in less than 10 minutes</u>
              </PageFooterHyperlink>
            </p>
          </div>
          <div className="page-footer-info__button">
            <a
              id="create-account-button"
              className="button button--secondary"
              href="https://auth0.com/signup"
              target="_blank"
              rel="noreferrer noopener"
            >
              Create Free Auth0 Account
            </a>
          </div>
          <div className="page-footer-info__resource-list">
            {resourceList.map((resource) => (
              <div
                key={resource.path}
                className="page-footer-info__resource-list-item"
              >
                <PageFooterHyperlink path={resource.path}>
                  {resource.label}
                </PageFooterHyperlink>
              </div>
            ))}
          </div>
        </div>
        <div className="page-footer-grid__brand">
          <div className="page-footer-brand">
            <Image
              className="page-footer-brand__logo"
              src="https://avatars.githubusercontent.com/u/84514548?v=4"
              alt="Sulav Gaire"
              width="20"
              height="22"
            />
            <PageFooterHyperlink path="https://sulavgaire.com.np/">
              Sulav Gaire
            </PageFooterHyperlink>
          </div>
        </div>
      </div>
    </footer>
  );
};
