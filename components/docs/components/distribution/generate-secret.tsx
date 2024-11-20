import CodeBlock from "../../preview/code-block";

const code = `import { NextResponse } from 'next/server';
import { createServerGeneratedSecret } from '@prex0/prex-client';
import type { ServerGeneratedSecretInput } from '@prex0/prex-client';

const SECRET = process.env.SECRET;

export async function POST(request: Request) {
  const requestBody: ServerGeneratedSecretInput = await request.json();

  try {
    const subSecret = await createServerGeneratedSecret(
      SECRET ?? '',
      requestBody
    );

    return NextResponse.json({ secret: subSecret }, { status: 200 });
  } catch (error) {
    console.error('Error generating secret:', error);
    return NextResponse.json({ message: 'Error generating secret' }, { status: 500 });
  }
}
`;

const codeSubmit = `<DistributionSubmit token={USDC_TOKEN_ARBITRUM} getURL={getURL} secretType='server_generated'>
...
  <DistributionSubmitResult />
</DistributionSubmit>
`;

const codeClaim = `
<DistributionReceive generateSecretPath='/api/gen'>
  ...
</DistributionReceive>
`;

export function ComponentDistributeGenerateSecret() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4 text-white" id="installation">
          Generate Secret
        </h1>
        <p className="text-gray-400 text-lg">
          Generate secret in server-side for secure distribution.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-white" id="create-project">
          Generate secret endpoint
        </h2>
        <p className="text-gray-300">
          Please add the following code to `app/api/gen/route.ts`. SECRET is
          generated by submit procedure.
        </p>
        <CodeBlock language="typescript" code={code} showLineNumbers={false} />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-white" id="create-project">
          How to submit
        </h2>
        <p className="text-gray-300">
          You can get the secret and the URL(or Code) after submit.
        </p>
        <CodeBlock language="tsx" code={codeSubmit} showLineNumbers={false} />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-white" id="create-project">
          How to claim
        </h2>
        <p className="text-gray-300">
          Specify the endpoint to generate secret.
        </p>
        <CodeBlock language="tsx" code={codeClaim} showLineNumbers={false} />
      </div>
    </div>
  );
}
