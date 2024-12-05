'use client';

import React, { type ReactElement, useEffect, useRef, useState } from 'react';
import { type TextField } from 'payload';
import { Button, TextInput, useField } from '@payloadcms/ui';
import { toKebabCase } from 'payload/shared';

export type SlugInputProps = TextField & {
  trackingField: string;
};

function SlugInput(props: SlugInputProps): ReactElement {
  const { trackingField, required } = props;

  const [unlockSlug, setUnlockSlug] = useState<boolean>(false);
  const { value: slugValue = '', setValue: setSlugValue } = useField<string>({
    path: 'slug',
  });

  const { value: trackingFieldValue } = useField<string>({
    path: trackingField,
  });

  const prevTrackingFieldValueRef = useRef(trackingFieldValue);
  const stopTrackingRef = useRef(false);

  useEffect(() => {
    if (!trackingField || stopTrackingRef.current) {
      return;
    }
    if (trackingFieldValue === prevTrackingFieldValueRef.current) {
      return;
    }

    const prevSlugValue = toKebabCase(
      prevTrackingFieldValueRef.current,
    ) as string;

    prevTrackingFieldValueRef.current = trackingFieldValue;
    if (prevSlugValue !== slugValue) {
      return;
    }
    setSlugValue(toKebabCase(trackingFieldValue));
  }, [setSlugValue, slugValue, trackingField, trackingFieldValue]);

  return (
    <div>
      <div className="slug">
        <span>Slug</span>
        <Button
          buttonStyle="pill"
          onClick={() => {
            setUnlockSlug(!unlockSlug);
          }}
        >
          {unlockSlug ? 'Lock' : 'Unlock'} Slug
        </Button>
      </div>
      <TextInput
        path="slug"
        description={
          slugValue
            ? `Auto generated based on ${trackingField}`
            : `Will be auto-generated from ${trackingField} when saved`
        }
        value={slugValue}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setSlugValue(e.target.value);
          stopTrackingRef.current = true;
        }}
        required={required}
        readOnly={!unlockSlug}
      />
    </div>
  );
}

export { SlugInput };
