"use client";

import {
  LinkReceive,
  LinkReceiveAmount,
  LinkReceiveError,
  LinkReceiveSender,
  LinkReceiveButton,
  LinkReceiveExpiration,
} from "@prex0/uikit/link-transfer";
import { useToast } from "@/hooks/use-toast";
import { Toaster } from "@/components/ui/toaster";
import { useCallback } from "react";
import { PreviewComponent } from "../preview/preview";

const ClaimCode = `import {
  LinkReceive,
  LinkReceiveAmount,
  LinkReceiveError,
  LinkReceiveSender,
  LinkReceiveButton,
  LinkReceiveExpiration
} from "@prex0/uikit/link-transfer";
import { useToast } from "@/hooks/use-toast";
import { Toaster } from "@/components/ui/toaster";
import { useCallback } from "react";
import { PreviewComponent } from "../preview/preview";

export function ClaimExample() {
  const { toast } = useToast();

  const onSuccess = useCallback(
    () => {
      toast({
        title: "Claim successful",
        description: (
          <p>
            Claim successful
          </p>
        ),
      });
    },
    [toast]
  );

  return (
    <PreviewComponent code={TransferCode}>
      <div className="w-[316px]">
        <LinkReceive
          onSuccess={onSuccess}
        >
          <div>
            <LinkReceiveAmount showSymbol />
          </div>
          <div>
            Sender: <LinkReceiveSender />
          </div>
          <div>
            Expiry: <LinkReceiveExpiration format={(timestamp) => new Date(timestamp * 1000).toLocaleString()} />
          </div>
          <LinkReceiveError />
          <LinkReceiveButton>
            Claim
          </LinkReceiveButton>
        </LinkReceive>
        <Toaster />
      </div>
    </PreviewComponent>
  );
}
`;

export function ClaimExample() {
  const { toast } = useToast();

  const onSuccess = useCallback(() => {
    toast({
      title: "Claim successful",
      description: <p>Claim successful</p>,
    });
  }, [toast]);

  return (
    <PreviewComponent code={ClaimCode}>
      <div className="w-[316px]">
        <LinkReceive
          linkParams={{
            id: "123",
            secret: "456",
          }}
          onSuccess={onSuccess}
          getURL={() => `${window.location.origin}/docs/components/claim`}
        >
          <div className="space-y-2">
            <div>
              <LinkReceiveAmount showSymbol />
            </div>
            <div>
              Sender: <LinkReceiveSender />
            </div>
            <div>
              Expiry:{" "}
              <LinkReceiveExpiration
                format={(timestamp) =>
                  new Date(timestamp * 1000).toLocaleString()
                }
              />
            </div>
            <LinkReceiveError />
            <LinkReceiveButton className="w-full" />
          </div>
        </LinkReceive>
        <Toaster />
      </div>
    </PreviewComponent>
  );
}