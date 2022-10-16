import React from 'react';
import Card from 'react-bootstrap/Card';

function Page() {
    return (
        <Card>
            <Card.Body>
                <blockquote cite="">

                </blockquote>
                <blockquote className="blockquote mb-0">
                    <p>
                        {' '}
                        Tell me and I forget, teach me and I may remember, involve me and I learn.{' '}
                    </p>
                    <footer className="blockquote-footer">
                        Benjamin Franklin
                    </footer>
                </blockquote>
            </Card.Body>
        </Card>
    );
}

export default Page;